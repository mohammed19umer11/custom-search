const filterResponse = async (response) => {
    var items=[]
    var nextPage=null
    var previousPage=null
    for(item in response.data.items)
    {
        items.push({
            title:response.data.items[item].title,
            link:response.data.items[item].link,
            snippet:response.data.items[item].snippet,
            image:(response.data.items[item].pagemap.imageobject)? 
                response.data.items[item].pagemap.imageobject[0].url : 
                    (response.data.items[item].pagemap.cse_thumbnail) ? 
                    response.data.items[item].pagemap.cse_thumbnail[0].src :
                        null
        })
    }
    if(response.data.queries.nextPage){nextPage=response.data.queries.nextPage[0].startIndex}
    if(response.data.queries.previousPage){previousPage=response.data.queries.previousPage[0].startIndex}
    
    return ({
        items,nextPage,previousPage
    })
}

module.exports=filterResponse