import platziMusicService from './platziMusicService'
const trackService = {}
trackService.search = function(q) {
  const type = 'track'
  return platziMusicService.get('/search',{
    params: {q: q, type: type}
  })
  .then(res => {
    return res.data
  })
}
export default trackService