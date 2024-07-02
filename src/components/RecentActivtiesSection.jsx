import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiFillThunderbolt } from "react-icons/ai";


const activities = [
  {
    id: 1,
    type: "Task Updated",
    user: "Nicole",
    action: "updated a Task",
    time: "22 Min Ago",
    icon: CiMenuFries,
    color: "#e91e63",
  },
  {
    id: 2,
    type: "Deal Added",
    user: "Parshi",
    action: "added a Deal",
    time: "1 Day Ago",
    icon: CiMenuFries,
    color: "#9c27b0",
  },
  {
    id: 3,
    type: "Published Article",
    user: "Ravi",
    action: "Published a article",
    time: "25 Min Ago",
    icon: AiFillThunderbolt,
    color: "#2196f3",
  },
  {
    id: 4,
    type: "Dock Updated",
    user: "Reshmi",
    action: "updated a Dock",
    time: "1 Day Ago",
    icon: AiFillThunderbolt,
    color: "#ffc107",
  },
  {
    id: 5,
    type: "Replied Comment",
    user: "Jonathan",
    action: "replied a Comment",
    time: "1 Day Ago",
    icon: AiFillThunderbolt,
    color: "#4caf50",
  },
];

const RecentActivtiesSection = () => {
  return (
    <div className="recent-activties h-100">
      <div className="card border-0 shadow p-3 h-100 ">
        <h5>Recent Activties</h5>
        <ul className="list-unstyled activities-list mt-3">
          {/* <li className="d-flex border1 align-items-center ">
            <section className="timeing">42min ago</section>
            <section className="d-flex position-relative  align-items-center border1">
              <div className="logo">
                <CiMenuFries />
              </div>
              <div className="line"></div>
            </section>
            <section className="border1">
              <h5>task update</h5>
              <p>nilai update there profile</p>
            </section>
          </li> */}
          {activities.map((activity) => {
            let Icon = activity.icon
            return (
              <div key={activity.id} className="activity-item">
                <div className="activity-time">{activity.time}</div>
                <div
                  className="activity-icon"
                  style={{ backgroundColor: activity.color }}
                >
                <Icon className='text-white'/>
                </div>
                <div className="activity-content">
                  <div className="activity-type">{activity.type}</div>
                  <div className="activity-description">
                    {activity.user} {activity.action}
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RecentActivtiesSection;

// import React from 'react';
// // import { Calendar, MessageSquare, FileText, Folder, PlusCircle } from 'lucide-react';

// const activities = [
//   { id: 1, type: 'Task Updated', user: 'Nicole', action: 'updated a Task', time: '22 Min Ago', icon: '', color: '#e91e63' },
//   { id: 2, type: 'Deal Added', user: 'Parshi', action: 'added a Deal', time: '1 Day Ago', icon: '', color: '#9c27b0' },
//   { id: 3, type: 'Published Article', user: 'Ravi', action: 'Published a article', time: '25 Min Ago', icon: '', color: '#2196f3' },
//   { id: 4, type: 'Dock Updated', user: 'Reshmi', action: 'updated a Dock', time: '1 Day Ago', icon: '', color: '#ffc107' },
//   { id: 5, type: 'Replied Comment', user: 'Jonathan', action: 'replied a Comment', time: '1 Day Ago', icon: '', color: '#4caf50' },
// ];

// const ActivityItem = ({ activity }) => {

//   return (
//     <div className="activity-item">
//       <div className="activity-icon" style={{ backgroundColor: activity.color }}>
//         < CiMenuFries  />
//       </div>
//        <div className="activity-content">
//         <div className="activity-type">{activity.type}</div>
//         <div className="activity-description">{activity.user} {activity.action}</div>
//         <div className="activity-time">{activity.time}</div>
//       </div>
//     </div>
//   );
// };

// const RecentActivities = () => {
//   return (
//     <div className="activities-container">
//       <h2 className="activities-title">Recent Activities</h2>
//       <div className="activities-list">
//         {activities.map((activity) => (
//           <ActivityItem key={activity.id} activity={activity} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentActivities;
