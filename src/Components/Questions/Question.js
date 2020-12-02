import React from 'react';
import Slide from './Slide/Slide';
import Main from './Main/Main';
import './Profile.css'


class Profile extends React.Component {

  state = {
    _id: 'hgfhg',
    avatar: 'https://img.pngio.com/avatar-female-person-profile-user-website-woman-icon-female-profile-png-512_512.png',
    name: 'Mary',
    email: '',
    data: [
      {
        imgUrl: 'https://i.pinimg.com/originals/79/e6/55/79e6551de9f125d7fa3d2a3c7cc18918.gif',
        title: 'Hermione Granger'
      },
      {
        id: '4',
        imgUrl: "https://i.pinimg.com/originals/26/b5/db/26b5dbe280dbbdb99e344eb365cdc998.gif",
        title: 'Magic.',
        userId: {
          avatar: 'https://c7.hotpng.com/preview/980/886/491/computer-icons-icon-design-avatar-flat-face-icon.jpg',
          userName: 'Rebeca',
          _id: 'dfgdfh'
        }
      },
      {
        id: '5',
        imgUrl: "https://i.pinimg.com/originals/75/d5/09/75d50920306de5692c8b0283590d712c.gif",
        title: 'Merdiveni.',
        userId: {
          avatar: 'https://c7.hotpng.com/preview/980/886/491/computer-icons-icon-design-avatar-flat-face-icon.jpg',
          userName: 'Rebeca',
          _id: 'dfgdfh'
        }
      },
      {
        id: '6',
        imgUrl: "https://i.pinimg.com/originals/cf/78/d5/cf78d52217b19faaf985c6e8f77215ef.gif",
        title: 'Осыпалась ночь...',
        userId: {
          avatar: 'https://c7.hotpng.com/preview/980/886/491/computer-icons-icon-design-avatar-flat-face-icon.jpg',
          userName: 'Rebeca',
          _id: 'dfgdfh'
        }
      },
      {
        id: '7',
        imgUrl: "https://i.pinimg.com/originals/4a/0f/ed/4a0fed241c87822193100236e1a5763f.gif",
        title: 'Magic wand',
        userId: {
          avatar: 'https://c7.hotpng.com/preview/980/886/491/computer-icons-icon-design-avatar-flat-face-icon.jpg',
          userName: 'Rebeca',
          _id: 'dfgdfh'
        }
      },
    
      {
        id: '8',
        imgUrl: "https://i.pinimg.com/originals/75/89/a2/7589a2d39f4f2513079dd591984c37f7.gif",
        title: 'Slytherin royals',
        userId: {
          avatar: 'https://c7.hotpng.com/preview/980/886/491/computer-icons-icon-design-avatar-flat-face-icon.jpg',
          userName: 'Rebeca',
          _id: 'dfgdfh'
        }
      },
    

    ],
  }
 
  fetchData = async () => {
    try {
      const token = localStorage.getItem('token')
      const userData = await fetch('https://serene-hamlet-28536.herokuapp.com/user/auth/profile', {
        method: 'GET',
        headers: {
          'auth-token': token
        }
      })
      const fetchedUserData = await userData.json()
      if (fetchedUserData.message) {
        console.log(fetchedUserData.message);
      }
      else {
        this.setState(
          {
            _id: fetchedUserData._id,
            name: fetchedUserData.name,
            email: fetchedUserData.email
          })
      }
    } catch (error) {
      console.log(error);
    }
  }
componentDidMount(){
  this.fetchData()
}

render() {


  return (
    <div className='Profile'>
      <Slide
        name={this.state.name}
        avatar={this.state.avatar} />
      <Main
        data={this.state.data}
        toggle={this.state.open}
        open={this.handleOpen}
        close={this.handleClose}
      />
    </div>

  );
}
}

export default Profile;
