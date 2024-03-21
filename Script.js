function loginWithGitHub() {
    const clientId = '99a7b2570fb68f711340'; 
    const redirectUri = 'http://localhost/callback'; 
    const scope = 'user'; 
        const githubProfileUrl = 'https://github.com/settings/applications/2519003'; 
        window.open(githubProfileUrl, '_blank');
}