import classes from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div>
      <h1>Project Budget Management</h1>

      <div className={classes.dashboardHead}>
        <div className="graph-1">12 Managing Project</div>
        <div className="graph-2">1,200,000 total</div>
      </div>

      <div class="dashboard-body">
        <div className={classes.projectContainer}>
          <div className={classes.projectTitle}>Projects</div>
          <div className={classes.listGroup}>
            <div
              className={
                (classes.listGroupItemAction,
                classes.listGroupItem,
                classes.listGroupItem2)
              }
            >
              <div className={classes.projectTitle}>
                RTF
                <div className={classes.projectDescription}>
                  Realtime Face Recognition.
                </div>
              </div>
              <div className={classes.projectBudget}>$12,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  //Example: command to use to re-route on button click
  //window.location.replace("/Login");
}

export default Dashboard;
