import './ProgressBar.css';

const ProgressBar = () => (
  <div className="percentage">
    <svg>
      <circle cx="30" cy="30" r="30" />
      <circle cx="30" cy="30" r="30" />
    </svg>
    <div className="number" />
  </div>
);

export default ProgressBar;
