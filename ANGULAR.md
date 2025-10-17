# npm i -g @angular/cli@16.2.10
Instalar la versión de angular 16, esto se ejecuta en la terminal de tu CMD

# ng new curso-angular-youTube | y | n | y | enter
Crear un proyecto en angular, esto ya se realiza desde visual studio code

# ng g c nombreComponente 
Sirve para crear todo un Componente completo (ts, HTML, css) adicional lo agrega en la declaración de NgModule principal.

# Modulos
# @NgModule({
#  declarations: [AppComponent],
#  import: [BrowserModule, AppRoutingModule],
#  providers: [],
#  export: [CommonModulo],
#  bootstrap: [AppComponent]
# })

* En la propiedad declaraciones siempre van tus módulos, en este caso mi componenente se llama AppComponent, si no nosotros tuviéramos mas modulos, aquí irían.

* En la propiedad import van otros Modulos, pero en este caso son los modulos de angular, un ejemplo es el AppRoutingModule, que te permite navegar entre modulos.

* En la propiedad providers, esta pendiente entender que hace.

* En la propiedad export, van tus modulo que tu deseas exportar para que tengan acceso.

* Aquí siempre se pone el componente principal, este caso AppComponent.

# @Component({
#   selector: 'app-root',
#   templateUrl: './app.component.html',
#   styleUrls: ['./app.component.css']
# })
#  export class AppComponent {
#   title = 'curso-angular-youtube';
# }

* Los componentes se conforman de un objeto, que tiene propiedades como selector, templateUrl y styleUrls.
* El selector es la forma de como vas poder llamar a otros componentes padres, un ejemplo seria que otro componenete si quiere llamar todo lo que hicistes, se pueda llamar., mediante <app-root/>
* El templateUrl es el archivo de nuestra plantilla, o sea nuestro esqueleto de nuestra aplicación, todo el HTML.
* El utileros este el archivo de estilos
* Lo otro es una clase, donde podemos crear variables para pasarla al componente.html, ejemplo: {{ title }}


# {{ title }}
Esto se llama interpolación de datos, de un ts a un HTML

# ng g s nombreServicio
Comando para crear un Servicio, parecido al comando de crear un Modulo

