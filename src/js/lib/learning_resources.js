import moment from "moment"

import { DATE_FORMAT } from "./constants"
import { emptyOrNil } from "./util"

const runStartDate = objectRun => moment(objectRun.best_start_date, DATE_FORMAT)

const runEndDate = objectRun => moment(objectRun.best_end_date, DATE_FORMAT)

const compareRuns = (firstRun, secondRun) =>
  runStartDate(firstRun).diff(runStartDate(secondRun), "hours")

export const bestRun = runs => {
  runs = runs.filter(run => run.best_start_date && run.best_end_date)

  // Runs that are running right now
  const currentRuns = runs.filter(
    run => runStartDate(run).isSameOrBefore() && runEndDate(run).isAfter()
  )
  if (!emptyOrNil(currentRuns)) {
    return currentRuns[0]
  }

  // The next future run
  const futureRuns = runs
    .filter(run => runStartDate(run).isAfter())
    .sort(compareRuns)
  if (!emptyOrNil(futureRuns)) {
    return futureRuns[0]
  }

  // The most recent run that "ended"
  const mostRecentRuns = runs
    .filter(run => runStartDate(run).isSameOrBefore())
    .sort(compareRuns)
    .reverse()
  if (!emptyOrNil(mostRecentRuns)) {
    return mostRecentRuns[0]
  }
  return null
}
