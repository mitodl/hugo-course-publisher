import React from "react"
import Dotdotdot from "react-dotdotdot"

import Card from "./Card"
import LearningResourceIcon from "./LearningResourceIcon"

import {
  CAROUSEL_IMG_HEIGHT,
  LR_TYPE_VIDEO,
  readableLearningResources
} from "../lib/constants"
import { SEARCH_GRID_UI, SEARCH_LIST_UI } from "../lib/search"

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

const CoverImage = ({ object, showResourceDrawer }) => (
  <div className="cover-image" onClick={showResourceDrawer}>
    <img
      src={object.image_src}
      height={CAROUSEL_IMG_HEIGHT}
      alt={`cover image for ${object.title}`}
    />
    {object.object_type === LR_TYPE_VIDEO ? (
      <img
        src="/static/images/video_play_overlay.png"
        className="video-play-icon"
      />
    ) : null}
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

  const iconKeys =
    object.audience && object.certification ?
      object.audience.concat(object.certification) :
      []

  return (
    <React.Fragment>
      {searchResultLayout === SEARCH_GRID_UI ? (
        <CoverImage object={object} />
      ) : null}
      <div className="lr-info">
        <div className="lr-row resource-type-audience-certificates">
          <div className="resource-type">
            {readableLearningResources[object.object_type]}
          </div>
          <div className="audience-certificates">
            {iconKeys.length > 0 ?
              iconKeys.map((key, i) => (
                <LearningResourceIcon iconKey={key} key={i} />
              )) :
              null}
          </div>
        </div>
        <div className="lr-row course-title" tabIndex="0">
          <Dotdotdot clamp={3}>{object.title}</Dotdotdot>
        </div>
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
      </div>
      {searchResultLayout === SEARCH_GRID_UI ? null : (
        <CoverImage object={object} />
      )}
    </React.Fragment>
  )
}
