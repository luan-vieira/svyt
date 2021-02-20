import axios from 'axios'
import queryString from'query-string'

const allowedProperties = [
  'fields',
  'channelId',
  'channelType',
  'eventType',
  'forContentOwner',
  'forDeveloper',
  'forMine',
  'location',
  'locationRadius',
  'onBehalfOfContentOwner',
  'order',
  'pageToken',
  'publishedAfter',
  'publishedBefore',
  'regionCode',
  'relatedToVideoId',
  'relevanceLanguage',
  'safeSearch',
  'topicId',
  'type',
  'videoCaption',
  'videoCategoryId',
  'videoDefinition',
  'videoDimension',
  'videoDuration',
  'videoEmbeddable',
  'videoLicense',
  'videoSyndicated',
  'videoType',
  'key'
]

const search = (term, options, callback) => {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  if (!options) options = {}

  if (!callback) {
    return new Promise(function (resolve, reject) {
      search(term, options, function (err, results, pageInfo) {
        if (err) return reject(err)
        resolve({ results: results, pageInfo: pageInfo })
      })
    })
  }

  let params = {
    q: term,
    part: options.part || 'snippet',
    maxResults: options.maxResults || 30
  }

  Object.keys(options).map(function (k) {
    if (allowedProperties.indexOf(k) > -1) params[k] = options[k]
  })

  axios.get('https://www.googleapis.com/youtube/v3/search?' + queryString.stringify(params))
    .then(({ data: result }) => {
      const pageInfo = {
        totalResults: result.pageInfo.totalResults,
        resultsPerPage: result.pageInfo.resultsPerPage,
        nextPageToken: result.nextPageToken,
        prevPageToken: result.prevPageToken
      }

      const findings = result.items.map(({ id, snippet }) => {
        let link = ''
        let objectId = ''
        switch (id.kind) {
          case 'youtube#channel':
            link = `https://www.youtube.com/channel/${id.channelId}`
            objectId = id.channelId
            break
          case 'youtube#playlist':
            link = `https://www.youtube.com/playlist?list=${id.playlistId}`
            objectId = id.playlistId
            break
          default:
            link = `https://www.youtube.com/watch?v=${id.videoId}`
            objectId = id.videoId
            break
        }

        return {
          id:           objectId,
          link:         link,
          kind:         id.kind,
          publishedAt:  snippet.publishedAt,
          channelId:    snippet.channelId,
          channelTitle: snippet.channelTitle,
          title:        snippet.title,
          description:  snippet.description,
          thumbnails:   snippet.thumbnails
        }
      })

      return callback(null, findings, pageInfo)
    })
    .catch(function (err) {
      return callback(err)
    })
}

export default search
