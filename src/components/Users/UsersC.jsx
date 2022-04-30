import React from 'react';
import u from './Users.module.css';
import NoFoto from '../Common/Foto/NoFoto.png';
import { NavLink } from 'react-router-dom';
import { Pagination } from 'antd';

const Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let pageChange = pageNumber => {
    props.onPageChanged(pageNumber);
  };

  return (
    <div>
      {/* <button onClick={this.getUsers}>Get Users</button> */}
      {props.users.map(item => (
        <div key={item.id} className={u.userLine}>
          <div className={u.leftSide}>
            <NavLink to={'/profile/' + item.id}>
              <img src={item.img ? item.img : NoFoto} />
            </NavLink>
            {item.friends ? (
              <button onClick={() => props.unfollow(item.id)}>Unfollow</button>
            ) : (
              <button onClick={() => props.follow(item.id)}>Follow</button>
            )}
          </div>

          <div className={u.centralSide}>
            <NavLink to={'/profile/' + item.id}>
              <span>
                <h4>{item.username}</h4>
              </span>
            </NavLink>
            <span>{item.userstatus}</span>
          </div>

          <div>
            <span>
              <h4>{item.country}</h4>
            </span>
            <span>default city </span>
          </div>
        </div>
      ))}
      <div className={u.pagesBar}>
        <Pagination
          size="small"
          defaultCurrent={1}
          total={props.totalUsersCount}
          onChange={pageChange}
          defaultPageSize={5}
        />
      </div>

      {/* <div className={u.pagesBar}>
        {pages.map(p => {
          return (
            <span
              className={props.currentPage === p ? u.selectedPage : u.unselectedPage}
              onClick={e => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div> */}
    </div>
  );
};

export default Users;
