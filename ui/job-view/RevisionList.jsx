import PropTypes from 'prop-types';
import { Revision } from './Revision';

export class RevisionList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.linkifyBugsFilter = this.props.$injector.get('linkifyBugsFilter');
    this.hasMore = props.push.revision_count > props.push.revisions.length;
  }

  render() {
    const { push, repo } = this.props;

    return (
      <span className="revision-list col-5">
        <ul className="list-unstyled">
          {push.revisions.map((revision, i) =>
            (<Revision
              linkifyBugsFilter={this.linkifyBugsFilter}
              revision={revision}
              repo={repo}
              key={i}
            />)
          )}
          {this.hasMore &&
          <MoreRevisionsLink
            key="more"
            href={repo.getPushLogHref(push.revision)}
          />
          }
        </ul>
        </span>
    );
  }
}

RevisionList.propTypes = {
  push: PropTypes.object.isRequired,
  $injector: PropTypes.object.isRequired,
  repo: PropTypes.object.isRequired,
};

export const MoreRevisionsLink = props => (
    <li>
      <a href={props.href}
         data-ignore-job-clear-on-click
         target="_blank"
      >{`\u2026and more`}<i className="fa fa-external-link-square" /></a>
    </li>
);

