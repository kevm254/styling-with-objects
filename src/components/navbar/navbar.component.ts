import { Component } from "@angular/core";

@Component({
  selector: "navbar-cmp",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
  navbarItems = [
    {
      name: "About",
      url: "/about"
    },
    {
      name: "Test",
      url: "/test"
    }
  ];

  NavbarStyle = {
    Container: {
      display: "flex",
      backgroundColor: "blue",
      height: "50px",
      width: "100%",
      color: "white",
      justifyContent: "space-between",
      overflow: "hidden"
    },

    Brand: {
      backgroundColor: "orange",
      width: "80px",
      height: "50px"
    },

    Items: {
      Container: {
        display: "flex",
        listStyle: "none",
        overflow: "hidden",
        // width: "80px",
        height: "50px",
        backgroundColor: "red",
        paddingTop: "10px"
      },
      MenuItem: {
        padding: "5px"
      }
    }
  };
}
