import NewsItem from "./news-item";

function NewsList(props){
    const {items} = props
    return(
        <ul className="m-5 flex-col items-center" >
            {items.map((event)=>(
                <NewsItem
                key={event.id}
                id={event.id}
                title={event.title}
                description={event.description}
                url={event.url}
                urlToImage={event.urlToImage}
                publishedAt={event.publishedAt}
                />)
            )}
        </ul>
    )
}

export default NewsList