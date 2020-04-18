import fetch from "node-fetch";
import { remote } from "electron";
import semver from "semver";

export const defaultUpdateEndpoint =
  process.env.APP_API_UPDATE_ENDPOINT ||
  "https://api.github.com/repos/amilajack/popcorn-time-desktop/releases";

export function isNewerSemvar(current: string, next: string): boolean {
  return semver.gt(current, next);
}

type Release = {
  prerelease: boolean;
  name: string;
};

/**
 * Return if the current application version is the latest
 */
export default function CheckUpdate(): Promise<boolean> {
  const currentSemvar = remote.app.getVersion();

  return fetch(defaultUpdateEndpoint)
    .then((res) => res.json())
    .then((res: Release[]) =>
      res.some(
        (each) => !each.prerelease && isNewerSemvar(each.name, currentSemvar)
      )
    );
}
