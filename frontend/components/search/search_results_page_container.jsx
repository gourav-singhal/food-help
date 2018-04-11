import { connect } from 'react-redux';

import SearchResultsPage from './search_results_page';
import { searchBusinesses } from '../../actions/search_actions';
import { selectResults, selectBusinesses } from '../../selectors/search_selectors';

const mapStateToProps = state => ({
  searchResults: selectResults(state),
  businesses: selectBusinesses(state)
});

const mapDispatchToProps = dispatch => ({
  searchBusinesses: searchString => dispatch(searchBusinesses(searchString))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage);
