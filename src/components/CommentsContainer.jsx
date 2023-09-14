import React from 'react'

const Comment = ({info})=>{
    return(
        <div className='my-8 bg-slate-200 py-5'> 
            <div className='flex gap-2'>
                <img className ="h-6"src={info.userImg} alt="userImg" />
                <h1>{info.userName}</h1>
            </div>
            <h1 className='mx-8 mt-2 bg-slate-300 py-2 '>Replies</h1>
        </div>
    )

}

const commentList=[{
    userImg: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    userName:"xyz",
    text:" hi there ",
    replies:[
        {
            userImg: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
            text:" hi there ",
            replies:[
                
            ]
        },
    ]
},{
    userImg: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    userName:"xyz",
    text:" hi there ",
    replies:[
        {
            userImg: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
            text:" hi there ",
            replies:[
                
            ]
        },
    ]
},{
    userImg: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    userName:"xyz",
    text:" hi there ",
    replies:[
        {
            userImg: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
            text:" hi there ",
            replies:[
                
            ]
        },
    ]
},
{
    userImg: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    userName:"xyz",
    text:" hi there ",
    replies:[
        {
            userImg: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
            text:" hi there ",
            replies:[
                
            ]
        },
    ]
}
]

const CommentsContainer = () => {
  return (
    // <div>
    <div className='mt-5'>
    <h1 className='text-2xl font-bold'>Comments:</h1>
    <div>{
        commentList.map((comments,index)=> < Comment info={comments} key={index}/>)}</div>
    </div>
    /* <div>
        {
        commentList.map((comments,index)=> < Comment info={comments.replies} key={index}/>)
        }
    </div>
    </div> */
  )
}

export default CommentsContainer