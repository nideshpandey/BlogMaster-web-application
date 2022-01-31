import './post.css';

export default function Post() {
    return (
        <div className='post'>
            <img className="postImg" src='https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?cs=srgb&dl=pexels-pixabay-261579.jpg&fm=jpg' alt="Any Photo "/>
            <div className="postInfo">
                <span className='postTitle'>THE POST TITLE</span>
                <hr />
                <span className="postDate">1 HOUR AGO</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Vel soluta magnam aliquam numquam?
                Itaque temporibus minima veniam tempora in, nemo unde quas quaerat?
                Sit eligendi sint recusandae fugiat officiis minus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Vel soluta magnam aliquam numquam?
                Itaque temporibus minima veniam tempora in, nemo unde quas quaerat?
                Sit eligendi sint recusandae fugiat officiis minus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Vel soluta magnam aliquam numquam?
                Itaque temporibus minima veniam tempora in, nemo unde quas quaerat?
                Sit eligendi sint recusandae fugiat officiis minus?
            </p>
        </div>
    );
}
