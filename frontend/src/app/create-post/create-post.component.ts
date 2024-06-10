import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
[x: string]: any;
  showSuccessAlert = false;
  showDangerAlert = false;
  post = {
    title: "",
    prix: 0,
    type: "",
    description: "",
    lieu: "",
    typeDeTransaction: "",
    superficie: 0,
    sallesDeBains: 2,
    chambres: 3,
    user_id: 1
  };
  imageFiles: File[] = [];

  constructor(public shared: AuthService,private router:Router) { }

  selectImage(event: any) {
    // Récupère les fichiers sélectionnés
    const selectedFiles: FileList = event.target.files;

    // Parcourt les fichiers sélectionnés
    for (let i = 0; i < selectedFiles.length; i++) {
      // Ajoute chaque fichier à la tableau imageFiles
      this.imageFiles.push(selectedFiles.item(i)!);
    }}

  Create() {
    const formData = new FormData();
    formData.append('title', this.post.title);
    formData.append('prix', this.post.prix.toString());
    formData.append('type', this.post.type);
    formData.append('description', this.post.description);
    formData.append('lieu', this.post.lieu);
    formData.append('typeDeTransaction', this.post.typeDeTransaction);
    formData.append('superficie', this.post.superficie.toString());
    formData.append('sallesDeBains', this.post.sallesDeBains.toString());
    formData.append('chambres', this.post.chambres.toString());
    formData.append('user_id', this.post.user_id.toString());

    // Reset alert variables
    this.showSuccessAlert = false;
    this.showDangerAlert = false;

    for (let file of this.imageFiles) {
      formData.append('imageFiles', file);
    }

    this.shared.createPost(formData)
      .subscribe(
        res => {
          console.log(res);
          this.showSuccessAlert = true;
          this.router.navigate(["/"]);// Show success alert
          // Optionally, you can reset the form or perform any other actions
        },
        err => {
          console.error(err);
          this.showDangerAlert = true; // Show danger alert
          // Optionally, you can display the error message or perform any other actions
        }
      );
  }
}
