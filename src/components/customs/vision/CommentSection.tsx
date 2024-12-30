import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface Comment {
  id: number
  author: string
  content: string
  avatar: string
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, author: 'Raquel', content: '¡Excelente video! Muy informativo.', avatar: '/avatar1.png' },
    { id: 2, author: 'Leo', content: 'Me gustaría ver más contenido como este.', avatar: '/avatar2.png' },
  ])
  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      setComments([...comments, { 
        id: comments.length + 1, 
        author: 'Usuario', 
        content: newComment.trim(),
        avatar: '/default-avatar.png'
      }])
      setNewComment('')
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Comentarios</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escribe un comentario..."
          className="w-full"
        />
        <Button type="submit">Publicar comentario</Button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-3">
            <Avatar>
              <AvatarImage src={comment.avatar} alt={comment.author} />
              <AvatarFallback>{comment.author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{comment.author}</p>
              <p className="text-gray-400">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentSection

