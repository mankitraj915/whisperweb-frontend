import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

@Component({
  selector: 'app-confessioncard',
  standalone: true,
  imports: [NgHeroiconsModule, CommonModule, FormsModule],
  templateUrl: './confessioncard.component.html',
  styleUrl: './confessioncard.component.css',
})
export class ConfessioncardComponent {
  @Input() confession: any;
  @Input() isDelete: Boolean = false;
  showComment: Boolean = false;
  comment: string = '';
  uid: string = localStorage.getItem('uid') || '';
  isLiked: Boolean = false;
  isloding: Boolean = false;
  isReport: Boolean = true;
  constructor() {}

  ngOnInit() {
    
    this.isLiked = this.confession?.likedby?.includes(this.uid) || false;
    this.isReport = !(this.confession?.uid === this.uid);

  }

  updateLike = async (id: string) => {
    

    try {
      this.isloding = true;
      const response = await fetch(
        `http://localhost:4000/api/updatelikes/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({ confessionId: this.confession._id }),
        }
      );

      const data = await response.json();
      if (data.error) {
        alert(data.error);
        return;
      }

      // console.log('Like updated: ', data);
    } catch (error) {
      console.error('Error updating like: ', error);
    } finally {
      if (this.isLiked) {
        this.confession.likes = this.confession.likes - 1;
        this.confession.likedby = this.confession.likedby.filter(
          (id: string) => id !== this.uid
        );
      } else {
        this.confession.likes = this.confession.likes + 1;
        this.confession.likedby.push(this.uid);
      }

      this.isLiked = !this.isLiked;
      this.isloding = false;
    }
  };

  postComment = async (id: string) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/addcomment/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({ comment: this.comment }),
        }
      );

      const data = await response.json();
      if (data.error) {
        alert(data.error);
        return;
      }

      this.confession.comments = data.comments;
    } catch (error) {
      console.error('Error posting comment: ', error);
    } finally {
      this.comment = '';
    }
  };

  reportConfession = async (id: string) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/reportconfession/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      const data = await response.json();
      if (data.message) {
        alert(data.message);
        return;
      }

      
      alert('Confession reported successfully');
    } catch (error) {
      console.error('Error reporting confession: ', error);
    }


  }

  toggleComment() {
    this.showComment = !this.showComment;
  }

  deleteconfession = async (id: string) => {
    try {
      this.confession = null;

      const response = await fetch(
        `http://localhost:4000/api/deleteconfession/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      const data = await response.json();
      if (data.error) {
        alert(data.error);
        return;
      }

      // console.log('Confession deleted: ', data);
    } catch (error) {
      console.error('Error deleting confession: ', error);
    }
  };
}
