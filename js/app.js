class App extends React.Component {
  constructor() {
    super();

    // Setting up initial state
    this.state = {
      data: [],
      loading: true,
      searchString: '',
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    this.setState({ searchString: e.target.value });
  }

  componentWillMount() {
    fetch('http://localhost/drupal8/api/articles')
    .then(result=>result.json())
    .then(data=>this.setState({
      loading: false,
      data: data,
    }));
  }

  render() {

    var data = this.state.data;

    //console.log(data);

    let searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      // We are searching. Filter the results.
      data = data.filter(function (l) {
          return l.title[0].value.toLowerCase().match(searchString);
        });
    }

    return (
        <section className="container articles">
          <div className="row">
            <div className="col-md-6">
              <h1 className="title">DRUPAL 8 REACT CONTENT</h1>
              <input type="text" value={this.state.searchString} onChange={this.handleChange} />
                {data.map(function (l) {
                  return (
                    <article key={l.nid[0].value}>
                      <h1>{l.title[0].value}</h1>
                      <img src={l.field_image[0].url} />
                      <p>DangerouslySetInnerHTML</p>
                      <div dangerouslySetInnerHTML={{ __html: l.body[0].value }} />
                      <p>Pure data print</p>
                      <p>{l.body[0].value}</p>
                    </article>
                  );
                })}

            </div>
          </div>
        </section>
      );
  }
}

// rendering into the DOM
ReactDOM.render(
     <App />,
     document.getElementById('container')
);
