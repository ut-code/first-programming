
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const __ETC_PROFILE_DONE: string;
	export const npm_config_userconfig: string;
	export const __HM_SESS_VARS_SOURCED: string;
	export const XDG_CONFIG_DIRS: string;
	export const npm_config_cache: string;
	export const NIX_BUILD_CORES: string;
	export const WSL2_GUI_APPS_ENABLED: string;
	export const WSLPATH: string;
	export const WLR_NO_HARDWARE_CURSORS: string;
	export const GTK_IM_MODULE: string;
	export const configureFlags: string;
	export const SPEECHD_CMD: string;
	export const WSL_DISTRO_NAME: string;
	export const mesonFlags: string;
	export const PKG_CONFIG_PATH: string;
	export const WT_SESSION: string;
	export const shell: string;
	export const depsHostHost: string;
	export const NODE: string;
	export const MAKE_TERMOUT: string;
	export const LC_ADDRESS: string;
	export const XDG_BIN_HOME: string;
	export const LC_NAME: string;
	export const DIRENV_DIR: string;
	export const XDG_DATA_HOME: string;
	export const STRINGS: string;
	export const XDG_CONFIG_HOME: string;
	export const depsTargetTarget: string;
	export const XCURSOR_PATH: string;
	export const stdenv: string;
	export const COLOR: string;
	export const LOCALE_ARCHIVE_2_27: string;
	export const npm_config_local_prefix: string;
	export const builder: string;
	export const XMODIFIERS: string;
	export const LIBVA_DRIVER_NAME: string;
	export const LC_MONETARY: string;
	export const GDK_PIXBUF_MODULE_FILE: string;
	export const ELECTRON_OZONE_PLATFORM_HINT: string;
	export const shellHook: string;
	export const NO_AT_BRIDGE: string;
	export const npm_config_globalconfig: string;
	export const DIRENV_FILE: string;
	export const EDITOR: string;
	export const phases: string;
	export const NAME: string;
	export const PWD: string;
	export const NIX_PROFILES: string;
	export const SOURCE_DATE_EPOCH: string;
	export const LOGNAME: string;
	export const NIX_ENFORCE_NO_NATIVE: string;
	export const CUPS_DATADIR: string;
	export const NIX_PATH: string;
	export const npm_config_init_module: string;
	export const NIXPKGS_CONFIG: string;
	export const CXX: string;
	export const _: string;
	export const system: string;
	export const HOST_PATH: string;
	export const IN_NIX_SHELL: string;
	export const doInstallCheck: string;
	export const HOME: string;
	export const NIX_BINTOOLS: string;
	export const SSH_ASKPASS: string;
	export const LC_PAPER: string;
	export const LANG: string;
	export const WSL_INTEROP: string;
	export const LS_COLORS: string;
	export const depsTargetTargetPropagated: string;
	export const npm_package_version: string;
	export const STARSHIP_SHELL: string;
	export const WAYLAND_DISPLAY: string;
	export const cmakeFlags: string;
	export const outputs: string;
	export const GIO_EXTRA_MODULES: string;
	export const NIX_STORE: string;
	export const LOCATE_PATH: string;
	export const LD: string;
	export const buildPhase: string;
	export const DIRENV_DIFF: string;
	export const INIT_CWD: string;
	export const READELF: string;
	export const GTK_A11Y: string;
	export const STARSHIP_SESSION_KEY: string;
	export const QT_QPA_PLATFORM: string;
	export const MFLAGS: string;
	export const XDG_CACHE_HOME: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const INFOPATH: string;
	export const npm_lifecycle_script: string;
	export const doCheck: string;
	export const npm_config_npm_version: string;
	export const depsBuildBuild: string;
	export const MAKEFLAGS: string;
	export const LC_IDENTIFICATION: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const GTK_PATH: string;
	export const SIZE: string;
	export const propagatedNativeBuildInputs: string;
	export const npm_config_prefix: string;
	export const LESSOPEN: string;
	export const USER: string;
	export const strictDeps: string;
	export const MAKE_TERMERR: string;
	export const TZDIR: string;
	export const AR: string;
	export const AS: string;
	export const DISPLAY: string;
	export const NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const NM: string;
	export const PAGER: string;
	export const MAKELEVEL: string;
	export const NIX_CFLAGS_COMPILE: string;
	export const LC_TELEPHONE: string;
	export const QTWEBKIT_PLUGIN_PATH: string;
	export const patches: string;
	export const QT_IM_MODULE: string;
	export const LC_MEASUREMENT: string;
	export const __NIXOS_SET_ENVIRONMENT_DONE: string;
	export const buildInputs: string;
	export const LOCALE_ARCHIVE: string;
	export const preferLocalBuild: string;
	export const LESSKEYIN_SYSTEM: string;
	export const npm_config_user_agent: string;
	export const QML2_IMPORT_PATH: string;
	export const TERMINFO_DIRS: string;
	export const XDG_STATE_HOME: string;
	export const npm_execpath: string;
	export const LD_LIBRARY_PATH: string;
	export const XDG_RUNTIME_DIR: string;
	export const NODE_PATH: string;
	export const depsBuildTarget: string;
	export const OBJCOPY: string;
	export const NIX_XDG_DESKTOP_PORTAL_DIR: string;
	export const out: string;
	export const npm_package_json: string;
	export const LC_TIME: string;
	export const WSLENV: string;
	export const STRIP: string;
	export const NIXOS_XDG_OPEN_USE_PORTAL: string;
	export const XDG_DATA_DIRS: string;
	export const LIBEXEC_PATH: string;
	export const OBJDUMP: string;
	export const npm_config_noproxy: string;
	export const BROWSER: string;
	export const PATH: string;
	export const propagatedBuildInputs: string;
	export const npm_config_node_gyp: string;
	export const dontAddDisableDepTrack: string;
	export const CC: string;
	export const NIX_CC: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const depsBuildTargetPropagated: string;
	export const depsBuildBuildPropagated: string;
	export const DIRENV_WATCHES: string;
	export const npm_config_global_prefix: string;
	export const NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const KPACKAGE_DEP_RESOLVERS_PATH: string;
	export const HOSTTYPE: string;
	export const QT_PLUGIN_PATH: string;
	export const PULSE_SERVER: string;
	export const CONFIG_SHELL: string;
	export const WT_PROFILE_ID: string;
	export const __structuredAttrs: string;
	export const npm_node_execpath: string;
	export const RANLIB: string;
	export const npm_config_engine_strict: string;
	export const NIX_HARDENING_ENABLE: string;
	export const LC_NUMERIC: string;
	export const OLDPWD: string;
	export const NIX_LDFLAGS: string;
	export const nativeBuildInputs: string;
	export const name: string;
	export const depsHostHostPropagated: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		__ETC_PROFILE_DONE: string;
		npm_config_userconfig: string;
		__HM_SESS_VARS_SOURCED: string;
		XDG_CONFIG_DIRS: string;
		npm_config_cache: string;
		NIX_BUILD_CORES: string;
		WSL2_GUI_APPS_ENABLED: string;
		WSLPATH: string;
		WLR_NO_HARDWARE_CURSORS: string;
		GTK_IM_MODULE: string;
		configureFlags: string;
		SPEECHD_CMD: string;
		WSL_DISTRO_NAME: string;
		mesonFlags: string;
		PKG_CONFIG_PATH: string;
		WT_SESSION: string;
		shell: string;
		depsHostHost: string;
		NODE: string;
		MAKE_TERMOUT: string;
		LC_ADDRESS: string;
		XDG_BIN_HOME: string;
		LC_NAME: string;
		DIRENV_DIR: string;
		XDG_DATA_HOME: string;
		STRINGS: string;
		XDG_CONFIG_HOME: string;
		depsTargetTarget: string;
		XCURSOR_PATH: string;
		stdenv: string;
		COLOR: string;
		LOCALE_ARCHIVE_2_27: string;
		npm_config_local_prefix: string;
		builder: string;
		XMODIFIERS: string;
		LIBVA_DRIVER_NAME: string;
		LC_MONETARY: string;
		GDK_PIXBUF_MODULE_FILE: string;
		ELECTRON_OZONE_PLATFORM_HINT: string;
		shellHook: string;
		NO_AT_BRIDGE: string;
		npm_config_globalconfig: string;
		DIRENV_FILE: string;
		EDITOR: string;
		phases: string;
		NAME: string;
		PWD: string;
		NIX_PROFILES: string;
		SOURCE_DATE_EPOCH: string;
		LOGNAME: string;
		NIX_ENFORCE_NO_NATIVE: string;
		CUPS_DATADIR: string;
		NIX_PATH: string;
		npm_config_init_module: string;
		NIXPKGS_CONFIG: string;
		CXX: string;
		_: string;
		system: string;
		HOST_PATH: string;
		IN_NIX_SHELL: string;
		doInstallCheck: string;
		HOME: string;
		NIX_BINTOOLS: string;
		SSH_ASKPASS: string;
		LC_PAPER: string;
		LANG: string;
		WSL_INTEROP: string;
		LS_COLORS: string;
		depsTargetTargetPropagated: string;
		npm_package_version: string;
		STARSHIP_SHELL: string;
		WAYLAND_DISPLAY: string;
		cmakeFlags: string;
		outputs: string;
		GIO_EXTRA_MODULES: string;
		NIX_STORE: string;
		LOCATE_PATH: string;
		LD: string;
		buildPhase: string;
		DIRENV_DIFF: string;
		INIT_CWD: string;
		READELF: string;
		GTK_A11Y: string;
		STARSHIP_SESSION_KEY: string;
		QT_QPA_PLATFORM: string;
		MFLAGS: string;
		XDG_CACHE_HOME: string;
		NIX_USER_PROFILE_DIR: string;
		INFOPATH: string;
		npm_lifecycle_script: string;
		doCheck: string;
		npm_config_npm_version: string;
		depsBuildBuild: string;
		MAKEFLAGS: string;
		LC_IDENTIFICATION: string;
		TERM: string;
		npm_package_name: string;
		GTK_PATH: string;
		SIZE: string;
		propagatedNativeBuildInputs: string;
		npm_config_prefix: string;
		LESSOPEN: string;
		USER: string;
		strictDeps: string;
		MAKE_TERMERR: string;
		TZDIR: string;
		AR: string;
		AS: string;
		DISPLAY: string;
		NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		NM: string;
		PAGER: string;
		MAKELEVEL: string;
		NIX_CFLAGS_COMPILE: string;
		LC_TELEPHONE: string;
		QTWEBKIT_PLUGIN_PATH: string;
		patches: string;
		QT_IM_MODULE: string;
		LC_MEASUREMENT: string;
		__NIXOS_SET_ENVIRONMENT_DONE: string;
		buildInputs: string;
		LOCALE_ARCHIVE: string;
		preferLocalBuild: string;
		LESSKEYIN_SYSTEM: string;
		npm_config_user_agent: string;
		QML2_IMPORT_PATH: string;
		TERMINFO_DIRS: string;
		XDG_STATE_HOME: string;
		npm_execpath: string;
		LD_LIBRARY_PATH: string;
		XDG_RUNTIME_DIR: string;
		NODE_PATH: string;
		depsBuildTarget: string;
		OBJCOPY: string;
		NIX_XDG_DESKTOP_PORTAL_DIR: string;
		out: string;
		npm_package_json: string;
		LC_TIME: string;
		WSLENV: string;
		STRIP: string;
		NIXOS_XDG_OPEN_USE_PORTAL: string;
		XDG_DATA_DIRS: string;
		LIBEXEC_PATH: string;
		OBJDUMP: string;
		npm_config_noproxy: string;
		BROWSER: string;
		PATH: string;
		propagatedBuildInputs: string;
		npm_config_node_gyp: string;
		dontAddDisableDepTrack: string;
		CC: string;
		NIX_CC: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		depsBuildTargetPropagated: string;
		depsBuildBuildPropagated: string;
		DIRENV_WATCHES: string;
		npm_config_global_prefix: string;
		NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		KPACKAGE_DEP_RESOLVERS_PATH: string;
		HOSTTYPE: string;
		QT_PLUGIN_PATH: string;
		PULSE_SERVER: string;
		CONFIG_SHELL: string;
		WT_PROFILE_ID: string;
		__structuredAttrs: string;
		npm_node_execpath: string;
		RANLIB: string;
		npm_config_engine_strict: string;
		NIX_HARDENING_ENABLE: string;
		LC_NUMERIC: string;
		OLDPWD: string;
		NIX_LDFLAGS: string;
		nativeBuildInputs: string;
		name: string;
		depsHostHostPropagated: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
