import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent {
  // @Input() postId: number; // Se desejar associar comentários a posts específicos
  showComments: boolean = false;
  showCommentBox: boolean = false;
  newComment: string = '';
  comments: string[] = [];


  toggleComments() {
    this.showComments = !this.showComments;
    this.showCommentBox = this.showComments; // Mostra o textarea apenas se os comentários estiverem visíveis
  }

  addComment() {
    if (this.newComment.trim() !== '') {
      // Adiciona o comentário apenas se o campo estiver preenchido
      this.comments.push(this.newComment);
      this.newComment = '';
      this.showCommentBox = false; // Esconde o textarea e o botão após adicionar um comentário
    }
  }

}
