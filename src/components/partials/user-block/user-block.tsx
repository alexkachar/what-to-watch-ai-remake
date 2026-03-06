import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoutes, AVATAR_BASE} from '../../../constants';
import {connect} from 'react-redux';
import {getAuthFlag, getUser} from '../../../store/reducers/user/selectors';
import User from '../../../interfaces/user';

interface Props {
  user: User;
  isAuth: boolean;
}

const UserBlock = (props: Props) => {
  const {isAuth, user} = props;

  return (
    <div className="user-block">
      {isAuth
        ? <Link to={AppRoutes.FAVORITES} className="user-block__avatar" style={{textDecoration: `none`}}>
          <img src={`${AVATAR_BASE}${user.avatarUrl}`} style={{borderRadius: `50%`, width: `63px`, height: `63px`}} />
        </Link>
        : <Link to={AppRoutes.LOGIN} className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: getUser(state),
  isAuth: getAuthFlag(state)
});

export default connect(mapStateToProps, null)(UserBlock);
