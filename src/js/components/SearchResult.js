import React from "react"
import Dotdotdot from "react-dotdotdot"

import Card from "./Card"

import {
  CAROUSEL_IMG_HEIGHT,
  LR_TYPE_RESOURCEFILE,
  LR_TYPE_VIDEO,
  readableLearningResources
} from "../lib/constants"
import { getCoverImageUrl, SEARCH_GRID_UI, SEARCH_LIST_UI } from "../lib/search"

const getClassName = searchResultLayout =>
  `learning-resource-card ${
    searchResultLayout === SEARCH_LIST_UI ? "list-view" : ""
  }`.trim()

const formatTopics = topics =>
  topics.map((topic, i) => <a key={i}>{topic.name}</a>)

const Subtitle = ({ label, content, htmlClass }) => (
  <div className="lr-row subtitle">
    <div className={`lr-subtitle ${htmlClass}`}>
      <span className="gray">{label}</span>
      {content}
    </div>
  </div>
)

export const CoverImage = ({ object }) => (
  <React.Fragment>
    <img
      src={getCoverImageUrl(object)}
      height={CAROUSEL_IMG_HEIGHT}
      alt={`cover image for ${object.title}`}
    />
    {object.object_type === LR_TYPE_VIDEO ||
    object.content_type === LR_TYPE_VIDEO ? (
        <img src="/images/video_play_overlay.png" className="video-play-icon" />
      ) : null}
  </React.Fragment>
)

const DrawerImageDiv = ({ object, showResourceDrawer }) => (
  <div className="cover-image" onClick={showResourceDrawer}>
    <CoverImage object={object} />
  </div>
)

const LinkedImageDiv = ({ object }) => (
  <div className="cover-image">
    <a href={object.url} target="_blank" rel="noopener noreferrer">
      <CoverImage object={object} />
    </a>
  </div>
)

export default function SearchResult(props) {
  const { searchResultLayout } = props

  return (
    <Card
      className={getClassName(searchResultLayout)}
      borderless={searchResultLayout === SEARCH_GRID_UI}
    >
      <LearningResourceDisplay {...props} />
    </Card>
  )
}

export function LearningResourceDisplay(props) {
  const { object, searchResultLayout } = props

  return (
    <React.Fragment>
      {searchResultLayout === SEARCH_GRID_UI ? (
        <CoverImage object={object} />
      ) : null}
      <div className="lr-info search-result">
        <div className="lr-row resource-type-audience-certificates">
          <div className="resource-type">
            {readableLearningResources[object.object_type]}
          </div>
        </div>
        <div className="lr-row course-title" tabIndex="0">
          {object.url ? (
            <a href={object.url} target="_blank" rel="noopener noreferrer">
              <Dotdotdot clamp={3}>
                {object.content_title || object.title}
              </Dotdotdot>
            </a>
          ) : (
            <Dotdotdot clamp={3}>{object.title}</Dotdotdot>
          )}
        </div>
        {object.run_title ? (
          <div className="lr-row subtitles" tabIndex="0">
            <a href={`/courses/${object.run_slug}`}>
              <Dotdotdot clamp={3}>
                {object.course_id ?
                  `${object.course_id.split("+").reverse()[0]} ` :
                  ""}
                {object.run_title}
              </Dotdotdot>
            </a>
          </div>
        ) : null}
        <div className="lr-row subtitles">
          {object.topics.length > 0 ? (
            <Subtitle
              content={formatTopics(object.topics)}
              label={`${
                object.topics.length === 1 ? "Subject" : "Subjects"
              } - `}
              htmlClass="subject"
            />
          ) : null}
        </div>
        <div className="lr-row subtitles">
          <Dotdotdot clamp={3}>{object.description}</Dotdotdot>
        </div>
      </div>
      {searchResultLayout === SEARCH_GRID_UI ? null : object.object_type ===
        LR_TYPE_RESOURCEFILE ? (
          <LinkedImageDiv object={object} />
        ) : (
          <DrawerImageDiv object={object} />
        )}
    </React.Fragment>
  )
}
