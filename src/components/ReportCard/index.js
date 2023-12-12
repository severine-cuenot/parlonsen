// React imports
import PropTypes from 'prop-types';

// imports
import './style.scss';

function ReportCard({ reports }) {
  return (
    <section className="oneReport">
      <ul className="oneReport__text">
        {reports.map((report) => (
          <li key={report.id}>
            <a href={report.url} target="_blank" rel="noreferrer" className="oneReport__link">
              {report.nomDuFichier}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

ReportCard.propTypes = {
  reports: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        url: PropTypes.string.isRequired,
        nomDuFichier: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};

export default ReportCard;
