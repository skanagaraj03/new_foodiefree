
const actions = [
  {
    id: 1,
    title: "Use",
    text: "Search district-wise free food points and quickly check service days.",
  },
  {
    id: 2,
    title: "Contribute",
    text: "Add new food spots with timing and schedule to help more people.",
  },
];

function HomeActionsSection() {
  return (
    <section className="actions-section">
      <h2>what you can do with foodiefree :</h2>
      <div className="action-grid">
        {actions.map((action) => (
          <article key={action.id} className="action-card">
            <p>{action.text}</p>
            <button type="button" className="primary-btn">
              {action.title.toLowerCase()}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HomeActionsSection;
