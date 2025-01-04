{
  description = "Reproducible stack with Nix";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.05";
  };

  outputs = { self, nixpkgs }: {
    devShells = {
      x86_64-linux = let
        pkgs = import nixpkgs {
          system = "x86_64-linux";
        };
      in pkgs.mkShell {
        buildInputs = with pkgs; [
          go
          postgresql
          caddy
          bun
        ];

        # Message personnalisé au démarrage du shell
        shellHook = ''
          echo "Bienvenue dans l'environnement de développement Nix !"
          echo "Les outils suivants sont disponibles : go, psql, caddy, bun."
        '';
      };
    };
  };
}
