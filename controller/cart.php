<?php
require_once('./controller/data.php');

?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/cartStyle.css">
    <link rel="stylesheet" href="./css/common.css">
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="shortcut icon" href="./img/favicon.jpg" type="image/x-icon">
    <script src="https://kit.fontawesome.com/83b9443572.js" crossorigin="anonymous"></script>
    <title>商品詳細</title>
</head>
<body>
  <main>
    <div class="header">
      <div class="header__logo">
        <a href="./index.php"><img src="./img/logo_horizontal.png" alt=""></a>
      </div>
      <div class="header__title">ショッピングカート</div>
    </div>
    <section class="product">
      <div class="product-container">
        <div class="description">
          <div class="description__img">
            <img src="./img/product-list-item_<?php echo $img[$productId]; ?>" alt="">
          </div>
          <div class="description__text">
          <?php echo $description[$productId]; ?>
          </div>
        </div>
        <div class="cart">
          <div class="cart-title">
            <?php echo $title[$productId]; ?>
          </div>
          <div class="cart-price">
            価格: <span id="price"><?php echo number_format($price[$productId]); ?></span>円(税込み)
          </div>
          <div class="cart-quantity">
            購入数
            <div class="cart-quantity__changeWrapper">
              <input id="quantity" type="number" value="1" min="1">
              <ul>
                <li><i id="plus" class="fas fa-chevron-up"></i></li>
                <li><i id="minus" class="fas fa-chevron-down"></i></li>
              </ul>
            </div>
          </div>
          <div class="cart-subtotal">
            小計：<span id="subtotal"></span> 円
          </div>
          <button class="cart__button" id="cartAdd">
            <i class="fas fa-cart-plus"></i>
            カートに追加する
          </button>
        </div>
      </div>
    </section>
    <section class="guide">
      <div class="guide-container">
        <div class="delivery">
          <div class="delivery__title">
            配送・送料について
          </div>
          <ul class="delivery-list">
            <li class="delivery-list-item">
              佐川急便
              <p class="delivery-list-item__text">
                送料は全国一律525円頂いております。<br>
                １回のお買い上げ商品の合計金額が10,000円以上の場合は送料が無料となります。
              </p>
            </li>
            <li class="delivery-list-item">
              クロネコヤマト
              <p class="delivery-list-item__text">
                送料は全国一律525円頂いております。<br>
                １回のお買い上げ商品の合計金額が10,000円以上の場合は送料が無料となります。
              </p>
            </li>
          </ul>
        </div>
        <div class="payment">
          <div class="payment__title">
            支払い方法について
          </div>
          <ul class="payment-list">
            <li class="payment-list-item">
              銀行振込
              <p class="payment-list-item__text">
                購入後にお送りさせて頂きますご注文確認メールに記載されております弊社指定の銀行口座へ、ご請求金額をお振り込み下さい。
              </p>
            </li>
            <li class="payment-list-item">
              クレジット決済
              <p class="payment-list-item__text">
                分割払い、リボ払い可能です。<br>
                ※支払い回数はクレジットカード会社によって異なります。
              </p>
              <img src="./img/payment-list_img.jpg" alt="">
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div class="hidden" id="mask"></div>
    <div class="hidden" id="modal">
      <div class="modal-body">
        <div class="message">
          <i class="fas fa-cart-plus"></i>
          カートに追加しました
        </div>
        <div class="buttonWrapper">
          <a class="button" href="./index.php#product">買い物を続ける</a>
          <button class="button" id="moveOnCart">カートに進む</button>
        </div>
      </div>
    </div>

  </main>
  <footer>
    <small>Copyright © kongouApiary All Rights Reserved.</small>
  </footer>
  <script src="./script/cart.js"></script>
</body>
</html>