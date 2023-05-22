import PropTypes from 'prop-types';
import {
  SectionStat,
  StatTitle,
  StatList,
  StatListItem,
  StatLabel,
  StatPercent,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStat>
      <StatTitle>{title}</StatTitle>
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatListItem key={id}>
            <StatLabel>{label}</StatLabel>
            <StatPercent>{percentage}%</StatPercent>
          </StatListItem>
        ))}
      </StatList>
    </SectionStat>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
