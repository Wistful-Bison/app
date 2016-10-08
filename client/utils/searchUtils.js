import fetch from 'isomorphic-fetch';

const actions = {
  search (options) {
    var qs = `/api/search?` +
             `term=${options.term}` +
             `&archived=${options.archived ? options.archived : 'false'}` +
             `${options.product ? '&product=${options.product}' : ''}` +
             `${options.dateStart ? '&dateStart=${options.dateStart}' : ''}` +
             `${options.dateEnd ? '&dateEnd=${options.dateEnd}' : ''}` +
             `${options.ticketId ? '&ticketId=${options.TicketId}' : ''}`;
    return new Promise((resolve, reject) => fetch(qs)
      .then(response => response.json()
           .then(json => resolve(json)
//            resolve(json.forEach(result => {
//              return {
//                id: result._source.id,
//                title: result._source.title,
//              }
//            }))
           ))
    )
    .catch(err => reject(err))
  }
}
          //response.json()
        //.then(json => {
          //var result = (json.forEach(result => {
            //return {
              //id: result._source.id,
              //title: result._source.title
            //}
          //}));
          //resolve(result);
        //})
      //)
      //.catch(err => reject(err)));
export default actions;
