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
  postComments: { [postId: number]: string[] } = {};

  ngOnInit() {
    // Carregue os comentários do localStorage ao inicializar o componente
    this.loadComments();
  }

  toggleComments() {
    this.showComments = !this.showComments;
    this.showCommentBox = this.showComments;

    // Carregue os comentários do localStorage quando os comentários estiverem visíveis
    if (this.showComments) {
      this.loadComments();
    }
  }

  addComment() {
    if (this.newComment.trim() !== '') {
      this.comments.push(this.newComment);
      this.newComment = '';
      this.showCommentBox = false;

      // Salve os comentários no localStorage após adicionar um comentário
      this.saveComments();
    }
  }

  removeComment(index: number) {
    // Remova o comentário do array
    this.comments.splice(index, 1);

    // Salve os comentários atualizados no localStorage após remover um comentário
    this.saveComments();
  }

  private loadComments() {
    // Carregue os comentários do localStorage
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      this.comments = JSON.parse(storedComments);
    }
  }

  private saveComments() {
    // Salve os comentários no localStorage
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }
}
