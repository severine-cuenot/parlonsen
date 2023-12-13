// React imports
import PropTypes from 'prop-types';

// imports
import './style.scss';
import reuImg from '../../../public/img/dessinparlonsen.jpg';

function ReportCard({ reports }) {
  // checking dates of my reports to filter and map them
  const reportsYear = [...new Set(reports.map((report) => report.date))];
  // Reverse the date order to see the last in first and making 2012 newer than 2011 for example
  const reversedReportsYeat = reportsYear.sort((a, b) => new Date(b) - new Date(a));

  return (
    <section className="oneReport">
      <div className="oneReport__left-block">
        {reversedReportsYeat.map((date) => (
          <div key={date}>
            <div className="oneReport__date">{date}</div>
            <ul className="oneReport__text">
              {reports
                .filter((report) => report.date === date)
                .map((filteredReport) => (
                  <li key={filteredReport.id} className="oneReport__li">
                    <a href={filteredReport.url} target="_blank" rel="noreferrer" className="oneReport__link">
                      {filteredReport.nomDuFichier}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="oneReport__right-block">
        <img src={reuImg} alt="réunion" className="oneReport__right-block--img" />
      </div>
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
