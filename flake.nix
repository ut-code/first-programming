{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        name = "flake-utils-sample";
      in
      {
        packages.default = pkgs.stdenv.mkDerivation {
          inherit name;
          src = ./.;
          buildInputs = with pkgs; [ bash ];
          buildPhase = ''
            mkdir -p $out/bin
            cat > $out/bin/${name} << EOF
            #!/usr/bin/env bash
            echo Hello flake-utils via ${system}!
            EOF
            chmod u+x $out/bin/${name}
          '';
        };

        devShell = pkgs.mkShell {
          inherit name;
          buildInputs = [ ];
          shellHook = '''';
        };
      });
}
