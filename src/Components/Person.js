import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react'

function Person() {
    const [posts, setPosts] = useState(null)
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/photos').then(data => data.json()).then(data => {
      setPosts(data);
    });
  }, []);
  return (
    <div className='container'>
    {
      (posts) ?
    (<ul>
      {
      posts.map(post => {
        return (
        <div style={{display:'inline-flex',marginleft:'20px', alignItems:'center',justifyContent:'center'}}>
      <Card style={{ width: '18rem', border:'1px solid none', margin:'20px', boxShadow:'5px 5px 5px 5px black',borderRadius:'20px',alignItems:'center',justifyContent:'center',paddingBottom:'20px' }}>
      <Card.Img variant="top" src={post.thumbnailUrl} style={{width:'290px', borderRadius:'20px 20px 0px 0'}}/>
      <Card.Body>
        <Card.Title style={{margin:'10px'}}>{post.title}</Card.Title>
        <Card.Text>
        {post.email}
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:'red',color:'white',padding:'10px 20px 10px 20px',borderRadius:'10px', alignItems:'center',justifyContent:'center',textAlign:'center',marginLeft:'50px',marginTop:'20px'}}>Go somewhere</Button>
      </Card.Body>
    </Card>
         
         
      </div>
        
        )
      })
      }
    </ul>) : (<h3>loadinmg</h3>)
}
    </div>
)
}

export default Person