function checkLogin() {
  const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
    const [key, value] = cookie.split("=");
    acc[key] = value;
    return acc;
  }, {});

  if (!cookies.loggedIn) {
    // 未ログインの場合、ログイン画面にリダイレクト
    window.location.href = "../login/"; // 相対パスを使用
  } else {
    // ログインしたユーザーのIDを表示
    const userId = cookies.userId;
    document.getElementById("userInfo").innerText = `ログインユーザー: ${userId}`;
  }
}

document.getElementById("logoutButton").addEventListener("click", function () {
  // クッキーを削除
  document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

  // ログイン画面にリダイレクト
  window.location.href = "../login/"; // 相対パスを使用
});

// ページ読み込み時にログイン状態を確認
checkLogin();
