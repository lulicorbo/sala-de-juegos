import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { createClient, User } from '@supabase/supabase-js'
import { environment } from '../../../environments/environment';

const supabase = createClient(environment.apiUrl, environment.publicAnonKey)

@Component({
  standalone: true,
  selector: 'app-registro',
  imports: [FormsModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})

export class RegistroComponent {

mail: string;
password: string;
nombre: string = '';
avatarFile: File | null = null;

constructor(private router: Router) {
this.mail = '';
this.password = '';
}

register() {
  supabase.auth.signUp({
    email: this.mail,
    password: this.password,
  }).then(({ data, error }) => {
    if (error) {
      console.error('Error:', error.message);

    } else {
      console.log('Cuenta creada correctamente!: ', data.user);
      this.saveUserData(data.user!);
    }
  }
  );

}



saveUserData(user: User) {

  const avatarUrl = this.saveFile().then((data) => {
    if (data) {

  supabase.from('usuarios-sala-de-juegos').insert([
    { authId: user.id, nombre: this.nombre, avatarUrl: data.path  }
  ]).then(({ data, error }) => {
    if (error) {
      console.error('Error:', error.message);
    } else {
      this.router.navigate(['/home']);
    }
  });

}
});

}


async saveFile() {
const { data, error } = await supabase
  .storage
  .from('imagenes') ////
  .upload(`usuarios/${this.avatarFile?.name}`, this.avatarFile!, {
    cacheControl: '3600',
    upsert: false
  });

  return data;
}

onFileSelected(event: any) {
  this.avatarFile = event.target.files[0];
}


}
