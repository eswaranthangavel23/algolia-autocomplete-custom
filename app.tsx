/** @jsx h */
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
import algoliasearch from 'algoliasearch/lite';
import { h, render } from 'preact';
import '@algolia/autocomplete-theme-classic';

const searchClient = algoliasearch(
  'RA46FT2Q5G',
  '69a1fff0143c7121bc2f35825680b272'
);

autocomplete({
  container: '#autocomplete',
  detachedMediaQuery: '',
  defaultActiveItemId: 0,
  debug:true,
  getSources() {
    return [
      {
        sourceId: 'hits',
        getItems({ query }) {
          return getAlgoliaResults({
            searchClient,
            queries: [
              {
                indexName: 'CTL_hermanmiller_ct_demo_products_data',
                query,
                params: {
                  hitsPerPage: 8,
                },
              },
            ],
          });
        },
        getItemUrl({ item }) {
          return item.url;
        },
        onActive({ item, setContext }) {
          setContext({ preview: item });
        },
        templates: {
          item({ item, components }) {
          const data={name:item.name['en'],image:item.images[0].url}
            return (
              <a className="aa-ItemLink" >
                eswaran
                <div className="aa-ItemContent">
                  <div className="aa-ItemIcon">
                    <img
                      src={data.image}
                      alt={data.name}
                      width="40"
                      height="40"
                    />
                  </div>
                  <div className="aa-ItemContentBody">
                    <div className="aa-ItemContentTitle">
                    <components.Highlight hit={data} attribute="name" />
                    </div>
                  </div>
                </div>
              </a>
            );
          },
        },
      },
      {
        sourceId: 'suggestions',
        getItems({ query }) {
          return getAlgoliaResults({
            searchClient,
            queries: [
              {
                indexName: 'CTL_hermanmiller_ct_demo_products_data_query_suggestions',
                query,
                params: {
                  hitsPerPage: 4,
                },
              },
            ],
          });
        },
        onSelect({ item, setQuery, setIsOpen, refresh }) {
          setQuery(`${item.query} `);
          setIsOpen(true);
          refresh();
        },
        templates: {
          header({ Fragment }) {
            return (
              <Fragment>
                <span className="aa-SourceHeaderTitle">
                  Can't find what you're looking for?
                </span>
                <div className="aa-SourceHeaderLine" />
              </Fragment>
            );
          },
          item({ item, components }) {
            return (
              <div className="aa-QuerySuggestion">
                <components.Highlight hit={item} attribute="query" />
              </div>
            );
          },
        },                                      
      },
    ];
  },
  render({ children, state, Fragment, components }, root) {
    const { preview } = state.context;
  
    const suggestion=state.collections[1].items.slice(0,5);
    const results=state.collections[0].items.map(x=>{return {query:x.name.en,description:x.description.de}}).slice(0,5);
    render(
      <Fragment>
        <div className="aa-Grid">
          <div className="aa-Results aa-Column">
            <div className='leftContainer'>
             {suggestion.map((item)=><a href="#" className='leftContaineritem'>
           
              <div className='text' >
            <components.Highlight hit={item} attribute="query" />
            </div>
              </a>)}</div></div>
          <div className="aa-Preview aa-Column">
            <div class='rightContainer'>             
            {results.map((item)=>           
            <div className='rightContainerItem'>   <div class='txtname'>
            <components.Highlight hit={item} tagName="query" attribute="query" /></div>
            <div class='txtdescription'>  <components.Highlight hit={item} tagName="description" attribute="description" /> </div></div>
            )}
            </div>         
          </div>
        </div>
      </Fragment>,
      root
    );
  },
});
