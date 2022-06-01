import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '../../hooks/useQuery'
import { commentsAPI } from '../../services/CommentService'
import { commentsLocalAPI } from '../../services/CommentServiceLocal'
import { postsAPI } from '../../services/PostService'
import CommentForm from '../CommentForm'
import CommentItem from '../CommentItem'
import Error from '../common/Error'
import Loading from '../common/Loading'

const Articles: FC = () => {
  const query = useQuery()
  const postId = Number(query.get('id'))
  const params = useParams()
  const userId = Number(params.id)

  const {
    data: post,
    isLoading,
    error,
  } = postsAPI.useFetchIdPostQuery({
    userId: userId,
    postId: postId,
  })

  // == Comments from jsonplaceholder:
  const { data: comments } = commentsAPI.useFetchAllCommentsQuery(postId)
  // == Comments from db.json:
  const { data: commentsLocal } =
    commentsLocalAPI.useFetchAllCommentsLocalQuery(postId)

  return (
    <div className='flex flex-col justify-center items-center w-full max-w-5xl mx-auto min-h-screen py-24'>
      <div className='flex justify-center w-full'>
        {isLoading && <Loading />}
        {error && <Error text='Failed to load the post' />}
      </div>
      {!isLoading && !error && (
        <div>
          {post &&
            post.map((item) => (
              <article
                key={item.id}
                className='p-4 border border-black rounded-md bg-gray-200'
              >
                <h2 className='text-2xl font-bold mb-2 first-letter:uppercase'>
                  § {item.title}
                </h2>
                <p className='first-letter:uppercase'>{item.body}</p>
                <hr className='border-black my-4' />
                <div className='flex flex-col gap-4'>
                  <h2>Comments:</h2>
                  {/* Mapping comments from jsonplaceholder */}
                  {comments &&
                    comments.map((comment) => (
                      <CommentItem
                        key={comment.id}
                        name={comment.name}
                        email={comment.email}
                        body={comment.body}
                      />
                    ))}
                  {/* Mapping comments from db.json */}
                  {commentsLocal &&
                    commentsLocal.map((comment) => (
                      <CommentItem
                        key={comment.id}
                        name={comment.name}
                        email={comment.email}
                        body={comment.body}
                      />
                    ))}
                </div>
                <hr className='border-black my-4' />
                <CommentForm postId={postId} />
              </article>
            ))}
        </div>
      )}
    </div>
  )
}

export default Articles
