{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    caddy 
    go     
    bun    
    postgresql
    migrate
    air
  ];
}
