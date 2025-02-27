jQuery(".button_system1").on("click", function (event) {
  event.preventDefault();
  let meta_acreage = jQuery(".caculator_system #meta_acreage").val();
  meta_template = jQuery("#meta_template").val();
  meta_location = jQuery(
    ".caculator_system .meta_location .select-options .active"
  ).attr("rel");
  meta_style = jQuery(
    ".caculator_system .meta_style .select-options .active"
  ).attr("rel");
  meta_city = jQuery(".caculator_system")
    .find(".meta_location .select-styled")
    .text();
  jQuery("#inf_form_city").val(meta_city);
  meta_loaihinh = jQuery(".caculator_system")
    .find(".meta_style .select-styled")
    .text();
  jQuery("#inf_form_loaihinh").val(meta_loaihinh);
  postbyurl(
    "hide_me",
    hr.a_url + "?action=caculator_system1",
    "meta_acreage=" +
      meta_acreage +
      "&meta_template=" +
      meta_template +
      "&meta_location=" +
      meta_location +
      "&meta_style=" +
      meta_style +
      "&meta_city=" +
      meta_city +
      "&meta_loaihinh=" +
      meta_loaihinh
  );
});
jQuery(".button_system2").on("click", function (event) {
  event.preventDefault();
  let meta_acreage = jQuery("#meta_acreage").val();
  meta_location = jQuery(
    ".caculator_system .meta_location .select-options .active"
  ).attr("rel");
  meta_style = jQuery(
    ".caculator_system .meta_style .select-options .active"
  ).attr("rel");
  meta_name = jQuery("#meta_name").val();
  meta_email = jQuery("#meta_email").val();
  meta_city = jQuery("#inf_form_city").val();
  meta_loaihinh = jQuery("#inf_form_loaihinh").val();
  postbyurl(
    "caculator_system",
    hr.a_url + "?action=caculator_system2",
    "meta_acreage=" +
      meta_acreage +
      "&meta_location=" +
      meta_location +
      "&meta_style=" +
      meta_style +
      "&meta_name=" +
      meta_name +
      "&meta_email=" +
      meta_email +
      "&meta_city=" +
      meta_city +
      "&meta_loaihinh=" +
      meta_loaihinh
  );
});
jQuery(".button_system_hgd1").on("click", function (event) {
  event.preventDefault();
  let meta_electricity = jQuery("#meta_electricity").val();
  postbyurl(
    "hide_me",
    hr.a_url + "?action=caculator_system_hgd1",
    "meta_electricity=" + meta_electricity
  );
});
jQuery(".button_system_hgd2").on("click", function (event) {
  event.preventDefault();
  let meta_electricity = jQuery("#meta_electricity").val();
  meta_name = jQuery("#meta_name").val();
  meta_email = jQuery("#meta_email").val();
  postbyurl(
    "caculator_system_hgd",
    hr.a_url + "?action=caculator_system_hgd2",
    "meta_electricity=" +
      meta_electricity +
      "&meta_name=" +
      meta_name +
      "&meta_email=" +
      meta_email
  );
});
jQuery(".code_button_system_hgd1").on("click", function (event) {
  event.preventDefault();
  let meta_electricity = jQuery("#meta_electricity").val();
  postbyurl(
    "hide_me",
    hr.a_url + "?action=code_caculator_system_hgd1",
    "meta_electricity=" + meta_electricity
  );
});
jQuery(".load_leisure").on("click", function (event) {
  jQuery(this).addClass("loading");
  var page = jQuery(this).attr("data-page");
  tax = jQuery(this).attr("data-tax");
  cat = jQuery(this).attr("data-cat");
  postbyurl(
    "hide_me",
    hr.a_url + "?action=load_more_post_customer",
    "page=" + page + "&cat=" + cat + "&tax=" + tax
  );
});
jQuery(".load_leisure_search").on("click", function (event) {
  jQuery(this).addClass("loading");
  var page = jQuery(this).attr("data-page");
  tax = jQuery(this).attr("data-tax");
  cat = jQuery(this).attr("data-cat");
  postbyurl(
    "hide_me",
    hr.a_url + "?action=load_more_post_customer_search",
    "page=" + page + "&cat=" + cat + "&tax=" + tax
  );
});
jQuery(".button_consultation1").on("click", function (event) {
  event.preventDefault();
  let meta_name = jQuery("#meta_name").val();
  meta_phone = jQuery("#meta_phone").val();
  meta_email = jQuery("#meta_email").val();
  meta_company = jQuery("#meta_company").val();
  meta_acreage = jQuery("#meta_acreage").val();
  postbyurl(
    "hide_me",
    hr.a_url + "?action=consultation1",
    "meta_name=" +
      meta_name +
      "&meta_phone=" +
      meta_phone +
      "&meta_email=" +
      meta_email +
      "&meta_company=" +
      meta_company +
      "&meta_acreage=" +
      meta_acreage
  );
});
jQuery(".button_consultation_dn2").on("click", function (event) {
  event.preventDefault();
  let meta_name = jQuery("#meta_name").val();
  meta_phone = jQuery("#meta_phone").val();
  meta_email = jQuery("#meta_email").val();
  meta_location = jQuery(".meta_location .select-options .active").attr("rel");
  meta_message = jQuery("#meta_message").val();
  meta_price = jQuery(".meta_price .select-options .active").attr("rel");
  meta_yes = jQuery("#yes").val();
  meta_no = jQuery("#no").val();
  postbyurl(
    "hide_me",
    hr.a_url + "?action=consultation_dn2",
    "meta_name=" +
      meta_name +
      "&meta_phone=" +
      meta_phone +
      "&meta_email=" +
      meta_email +
      "&meta_location=" +
      meta_location +
      "&meta_message=" +
      meta_message +
      "&meta_price=" +
      meta_price +
      "&meta_yes=" +
      meta_yes +
      "&meta_no=" +
      meta_no
  );
});
jQuery(".button_consultation_dn1").on("click", function (event) {
  event.preventDefault();
  let meta_name = jQuery("#meta_name").val();
  meta_phone = jQuery("#meta_phone").val();
  meta_email = jQuery("#meta_email").val();
  postbyurl(
    "hide_me",
    hr.a_url + "?action=consultation_dn1",
    "meta_name=" +
      meta_name +
      "&meta_phone=" +
      meta_phone +
      "&meta_email=" +
      meta_email
  );
});
jQuery(".button_consultation2").on("click", function (event) {
  event.preventDefault();
  let meta_name = jQuery("#meta_name").val();
  meta_phone = jQuery("#meta_phone").val();
  meta_email = jQuery("#meta_email").val();
  meta_location = jQuery(".meta_location .select-options .active").attr("rel");
  meta_company = jQuery("#meta_company").val();
  meta_acreage = jQuery("#meta_acreage").val();
  meta_yes = jQuery("#yes").val();
  meta_no = jQuery("#no").val();
  postbyurl(
    "hide_me",
    hr.a_url + "?action=consultation2",
    "meta_name=" +
      meta_name +
      "&meta_phone=" +
      meta_phone +
      "&meta_email=" +
      meta_email +
      "&meta_location=" +
      meta_location +
      "&meta_company=" +
      meta_company +
      "&meta_acreage=" +
      meta_acreage +
      "&meta_yes=" +
      meta_yes +
      "&meta_no=" +
      meta_no
  );
});
jQuery(".close_popup_video").on("click", function (event) {
  jQuery(".consultation_form_sec.step1").addClass("display_none");
  jQuery(".consultation_form_sec.step2").addClass("display_none");
  jQuery(".consultation_form_sec.step3").removeClass("display_none");
  jQuery(".close_popup_video").addClass("display_none");
  jQuery(".popup_tuvan .content > h2").addClass("display_none");
});
jQuery('.consultation_form_radio input[type="radio"]').click(function () {
  jQuery(this)
    .parent(".consultation_form_radio_item")
    .find('input[type="radio"]')
    .attr("value", "off");
  jQuery(this).attr("value", "on");
});
jQuery(".load_more_product").on("click", function (event) {
  jQuery(this).addClass("loading");
  var page = jQuery(this).attr("data-page");
  tax = jQuery(this).attr("data-tax");
  cat = jQuery(this).attr("data-cat");
  meta_manufacturer = jQuery(this).attr("data-manufacturer");
  meta_style = jQuery(this).attr("data-style");
  meta_wattage = jQuery(this).attr("data-wattage");
  postbyurl(
    "hide_me",
    hr.a_url + "?action=load_more_product",
    "page=" +
      page +
      "&cat=" +
      cat +
      "&tax=" +
      tax +
      "&meta_manufacturer=" +
      meta_manufacturer +
      "&meta_style=" +
      meta_style +
      "&meta_wattage=" +
      meta_wattage
  );
});
jQuery(document).delegate(
  ".box_cat_product .update_product",
  "change",
  function () {
    var meta_manufacturer = jQuery(this)
      .parents(".box_cat_product")
      .find(".meta_manufacturer .select-options .active")
      .attr("rel");
    meta_style = jQuery(this)
      .parents(".box_cat_product")
      .find(".meta_style .select-options .active")
      .attr("rel");
    meta_wattage = jQuery(this)
      .parents(".box_cat_product")
      .find(".meta_wattage .select-options .active")
      .attr("rel");
    meta_term_id = jQuery(this)
      .parents(".box_cat_product")
      .find(".meta_term_id")
      .val();
    meta_id = jQuery(this).parents(".box_cat_product").find(".meta_id").val();
    postbyurl(
      "hide_me",
      hr.a_url + "?action=update_product",
      "meta_manufacturer=" +
        meta_manufacturer +
        "&meta_style=" +
        meta_style +
        "&meta_wattage=" +
        meta_wattage +
        "&meta_term_id=" +
        meta_term_id +
        "&meta_id=" +
        meta_id
    );
  }
);
jQuery(document).delegate(
  ".filter_cat_product .update_product",
  "change",
  function () {
    var meta_manufacturer = jQuery(
      ".meta_manufacturer .select-options .active"
    ).attr("rel");
    meta_style = jQuery(".meta_style .select-options .active").attr("rel");
    meta_wattage = jQuery(".meta_wattage .select-options .active").attr("rel");
    meta_term_id = jQuery(".meta_term_id").val();
    console.log(meta_manufacturer);
    postbyurl(
      "hide_me",
      hr.a_url + "?action=filter_update_product",
      "meta_manufacturer=" +
        meta_manufacturer +
        "&meta_style=" +
        meta_style +
        "&meta_wattage=" +
        meta_wattage +
        "&meta_term_id=" +
        meta_term_id
    );
  }
);
jQuery(".load_more_post").on("click", function (event) {
  jQuery(this).addClass("loading");
  var page = jQuery(this).attr("data-page");
  search = jQuery(this).attr("data-search");
  postbyurl(
    "hide_me",
    hr.a_url + "?action=load_more_search",
    "page=" + page + "&search=" + search
  );
});
