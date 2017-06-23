// @flow
import React from 'react';
import classNames from 'classnames';

type Props = {
  selectShow: (type: string, season: number, episode?: number) => void,
  selectedSeason: number,
  selectedEpisode: number,
  seasons: Array<{
    season: number,
    overview: string,
  }>,
  episodes: Array<{
    episode: number,
    overview: string,
    title: string
  }>
};

export default function Show(props: Props) {
  const {
    seasons,
    selectShow,
    selectedSeason,
    episodes,
    selectedEpisode
  } = props;

  return (
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h4>Seasons:</h4>
        <div className="list-group">
          {seasons.map((season) =>
            (<a
              className={classNames('list-group-item', {
                active: season.season === selectedSeason
              })}
              onClick={() => selectShow('episodes', season.season)}
              key={season.season}
            >
              Season {season.season}
            </a>)
          )}
        </div>
      </div>

      <div className="col-sm-12 col-md-6">
        <h4>Episodes:</h4>
        <div className="list-group">
          {episodes.map((episode) =>
            (<a
              className={classNames('list-group-item', {
                active: episode.episode === selectedEpisode
              })}
              onClick={() =>
                selectShow('episode', selectedSeason, episode.episode)}
              key={episode.episode}
            >
              Ep {episode.episode}. {episode.title}
            </a>)
          )}
        </div>
      </div>

      <ul>
        <li><h3>Season overview:</h3></li>
        <li>
          <a>
            {seasons.length && selectedSeason && seasons[selectedSeason]
              ? seasons[selectedSeason].overview
              : null}
          </a>
        </li>
      </ul>
      <ul>
        <li><h3>Episode overview:</h3></li>
        <li>
          <a>
            {episodes.length && selectedSeason && episodes[selectedEpisode]
              ? episodes[selectedEpisode].overview
              : null}
          </a>
        </li>
      </ul>
    </div>
  );
}

Show.defaultProps = {
  seasons: [],
  episodes: [],
  episode: {}
};
