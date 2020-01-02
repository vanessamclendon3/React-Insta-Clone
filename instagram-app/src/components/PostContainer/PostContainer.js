import React from 'react';

const PostContainer = props =>{
    return(
       <div>
           {props.data.map(d =>{
              return <div key={d.id}>
                  <img src={d.thumbnailUrl} alt="thumbnail pic"/>
                  <p>{d.username}</p>
                  <img src={d.imageUrl} alt="main picture" />
                  <div>
                      <p>{d.likes} likes</p>
                  </div>
                   {props.comment.map(commen =>{
                       <div key={commen.id}>
                       <p>{commen.username}</p>
                       <p>{commen.text}</p>
                       </div>
                   })}
                  <div>

                  </div>
               </div>
           })}
       </div>
    )
}

export default PostContainer;