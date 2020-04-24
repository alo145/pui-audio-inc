/* Minification failed. Returning unminified contents.
(132,17-18): run-time warning JS1004: Expected ';': s
(133,17-18): run-time warning JS1004: Expected ';': n
(136,13-14): run-time warning JS1004: Expected ';': a
(206,13-14): run-time warning JS1004: Expected ';': m
(207,13-14): run-time warning JS1004: Expected ';': v
(1568,9-10): run-time warning JS1004: Expected ';': s
(1569,9-10): run-time warning JS1004: Expected ';': s
(1570,9-10): run-time warning JS1004: Expected ';': n
 */
$(document).ready(function () {
    if (this.addform) {
        if (!window.mobile) {
            this.addform.qty.focus();
            this.addform.qty.select();
        }
    }

    setUpCarouselThumbnails();
    loadSubstitutesTable();
    setTimeToShip();

    detailSummary();
    $(".expander-div-5").each(function () {
        expandItemsIntialize($(this), 5);
    });
    $(".expander-div-10").each(function () {
        expandItemsIntialize($(this), 10);
    });

    $(".lnkDatasheet").each(function () { datasheetFileClick($(this), "Get Datasheet") });
    $(".lnkDatasheetDownload").each(function () { datasheetFileClick($(this), "Download Datasheet") });
    $(".videoLink").each(function () { videoFileClick($(this)) });
    $(".mediafile").find(".more-expander-item a").each(function () { mediaFileClick($(this)) });
    $(".lnkProductPhoto").each(function () { expandImageClick($(this), "Standard Image", "Photo") });
    $(".lnkProductDrawing").each(function () { expandImageClick($(this), "Drawing Image", "Drawing") });
    $(".lnkProduct360Image").each(function () { expandImageClick($(this), "360 Image", "360 Image") });
    $(".lnkAccelDesign").attr("track-data", "ref_page_event=Get CAD File" + ';'
        + 'ref_pn_sku=' + (utag_data.pn_sku) + ';'
        + 'ref_part_id=' + (utag_data.part_id) + ';'
        + 'ref_supplier_id=' + (utag_data.supplier_id) + ';');
    $(".linkTracker").each(function () { appendWebTrendsTag($(this)); });
    $(".lnkSugSub").each(function () { addWtCookieTrack($(this), "Substitute-Suggested"); });
    $(".lnkRohsSub").each(function () { addWtCookieTrack($(this), "Substitute-Rohs"); });
    $(".lnkAlsoEval").each(function () { addWtCookieTrack($(this), "Substitute-Also Eval"); });
    $(".lnkChipOutAlt").each(function () { addWtCookieTrack($(this), "Substitute-Chip Outpost"); });
    $(".lnkDKChipOutAlt").each(function () { addWtCookieTrack($(this), "Substitute-Chip Outpost Dgkey"); });
    $(".lnkAltPack").each(function () { addWtCookieTrack($(this), "Substitute-Packaging"); });
    $(".lnkBroadSub").each(function () { addWtCookieTrack($(this), "Substitute-Frequently Bought Together"); });
    $(".btnLeadTime").each(function () { checkLeadTimeClick($(this)); });
    // Product Associations
    $(".lnkTooling").each(function () { addWtCookieTrack($(this), "LeftTbl-Tooling/UseWith"); });
    $(".lnkAlternateColor").each(function () { addWtCookieTrack($(this), "LeftTbl-Color"); });
    $(".lnkAlternateLength").each(function () { addWtCookieTrack($(this), "LeftTbl-Length"); });
    $(".lnkAssembly").each(function () { addWtCookieTrack($(this), "LeftTbl-Assembly"); });
    $(".lnkMilitary").each(function () { addWtCookieTrack($(this), "LeftTbl-Military/Commercial"); });
    $(".lnkRelatedProducts").each(function () { addWtCookieTrack($(this), "LeftTbl-Related"); });
    $(".lnkInterconnect").each(function () { addWtCookieTrack($(this), "LeftTbl-Interconnect"); });
    $(".lnkKits").each(function () { addWtCookieTrack($(this), "LeftTbl-Kits/KitContents"); });
    $(".lnkMatingProducts").each(function () { addWtCookieTrack($(this), "LeftTbl-Mating"); });
    $(".lnkUseWith").each(function () { addWtCookieTrack($(this), "LeftTbl-Associated/UseWith"); });
    $(".lnkViewMoreKits").each(function () { addWtCookieTrack($(this), "View More Kit Products"); });
    $(".lnkViewMoreMatingProducts").each(function () { addWtCookieTrack($(this), "View More Mating Products"); });
    $(".lnkViewMoreUseWith").each(function () { addWtCookieTrack($(this), "View More Use With Products"); });
    $(".lnkViewMoreMilitary").each(function () { addWtCookieTrack($(this), "View More Military Products"); });
    $(".lnkViewMoreAlternateColor").each(function () { addWtCookieTrack($(this), "View More Alternate Color Products"); });
    $(".lnkViewMoreAlternateLength").each(function () { addWtCookieTrack($(this), "View More Alternate Length Products"); });
    $(".lnkViewMoreAssembly").each(function () { addWtCookieTrack($(this), "View More Assembly Products"); });
    $(".lnkViewMoreTooling").each(function () { addWtCookieTrack($(this), "View More Tooling Products"); });
    $(".lnkViewMoreRelatedProducts").each(function () { addWtCookieTrack($(this), "View More Related Products"); });
    $(".lnkViewMoreInterconnect").each(function () { addWtCookieTrack($(this), "View More Interconnect Products"); });
    // End Product Associations
    $(".lnkMfct").each(function () { addVendorWtCookieTrack($(this)); });
    $("#prod-submit").each(function () { addWtCookieTrack($(this), "Reverse Search"); });
    $("#addtoorderbutton").each(function () { addWtAddtoCartCookieTrack($(this), "Add to Cart"); });
    $("#request-quote-description").each(function () { addWtCookieTrack($(this), "Request Code"); });
    $(".clickButton").each(function () { showCopy($(this)); });

    trackAddToFavorites($("#addtofavloggedin"));
    var isHeaderCurToggleEnabled = __headerData.enableCurToggle && (!window.headerLanguageToggle || !window.headerLanguageToggle.disableCur);
    if (isHeaderCurToggleEnabled && __headerData.curs.length > 1) {
        if ($('#legCurChanger').length) {
            $('#legCurChanger').hide();
        }
    }
    if ($(".chosen-select").length) {
        $(".chosen-select").chosen({ allow_single_deselect: true, disable_search_threshold: 5 });
        $('.chosen-select').on('chosen:no_results', function () { $(".no-results").remove(); });
    }
    //start fancybox for image popup carousels
    $(".popup").fancybox({
        loop: true,
        iframe: {
            attr: {
                scrolling: 'no'
            }
        },
        buttons: [
            "zoom",
            "slideShow",
            "fullScreen",
            "close"
        ],
        afterShow: function (instance, current) {// we need the instance param even tho its not used. if we don't have it current doesnt work :-()
            utag.dkLink(current.opts.$orig[0].attributes.getNamedItem("track-data").value);
        }
    });

    //tie large image to fancybox
    $(".product-photo-large").click(function () {
        $(".popup").eq(selectedPic).trigger("click");
        return false;
    });

    if (!window.mobile) {
        $(window).load(function () {
            moveFeedback();
        });
        $(window).scroll(function () {
            moveFeedback();
        });
        $(window).resize(function () {
            moveFeedback();
        });
    }

    moveFeedback();


    if (vendorOverride)
    $(".lnkAlsoEval").each(function () {
        addPersonalizationTrackAlsoEval($(this));
        });

    loadVat();

    clearNewSelectedFromBrowser(); clearSelectedFromBrowser();

    $("#prod-submit").click(function () {
        var appArr = [];
        $.each($("input[class='attributes-input']:checked"), function () {
            let self = $(this);
            let name = self.attr('name');
            appArr.push("\"" + name + "\":\"['Table':'" + self.val() + "']\"");
        });
        let a = "{" + appArr + "}";
        sessionStorage.setItem("new_selected_params", a);
        sessionStorage.setItem("selected_params", a);
    });

});

function moveFeedback() {
    if (!isScrolledIntoView('#footer')) {
        $("#feedback").removeClass("floating");
    } else {
        $("#feedback").addClass("floating");
    }
}

$(window).load(function () {
    // Trigger Personalization click event
    var utag = window['utag'];
    if (utag && utag.data['personalization_program']) {
        var data = {};
        data['personalization_program'] = utag.data['personalization_program'];
        data['personalization_creative'] = utag.data['personalization_creative'];
        data['event_category'] = 'Personalization';
        data['ref_page_type'] = utag.data['ref_page_type'];
        data['ref_page_sub_type'] = utag.data['ref_page_sub_type'];
        data['ref_page_id'] = utag.data['ref_page_id'];
        data['ref_page_event'] = 'Click';
        data['ref_supplier_id'] = utag.data['supplier_id'];
        data['not_a_pageview'] = '1';
        data['page_site'] = utag.data['page_site'];
        data['page_language'] = utag.data['page_language'];
        data['event_domain'] = utag.data['event_domain'];
        data['event_url'] = utag.data['dom.pathname'];
        data['event_query'] = utag.data['dom.query'];
        data['wt_dl'] = '2';
        data['wt_use_udo'] = 'true';

        utag.link(data);
    }
});


function loadVat() {
    var vat = $('#vat-holder');
   
    if (vat.length)
    {
        var unit = vat.attr('data-unit');
        var iso = vat.attr('data-iso');

        if (typeof unit !== 'undefined' && typeof iso !== 'undefined') {
            $.ajax({
                url: '//' + window.location.hostname + '/api/vat/VatApi/GetVatAsync',
                data: { unit: unit, iso: iso },
                dataType: "html",
                success: function (data)
                {
                    vat.html(data);
                },
                error: function (data)
                {
                    vat.html("");
                }
            });
        }
    }
}

function loadSubstitutesTable() {
    if ($('#newSubsTable').length) {
        let manufacturerPartNumber = $('#newSubsTable').attr('mpart');
        let vendorId = $('#newSubsTable').attr('vendorid');

        if (typeof manufacturerPartNumber !== 'undefined' && typeof vendorId !== 'undefined') {
            $.ajax(
                {
                    url: '//' + window.location.hostname + '/api/subsTable/Substitutions/LoadSubs',
                    type: 'POST',
                    data: { mfrPartNumber: manufacturerPartNumber, vendorId: vendorId }, //input parameters to action
                    beforeSend: function () {
                        $('#newSubsTable').show();
                        var img = '<div class="loading"></div>';
                        $('#newSubsTable').html(img);
                    },
                    success: function (data) {
                        $('#newSubsTable').html(data);

                        // Need to call the expandItems function again since this loaded after DOM finished
                        expandItemsIntialize($(".expander-div-subs-5"), 5);
                    },
                    error: function (data) {
                        $('#newSubsTable').html("");
                    }
                });
        }
    }
}

function methodChooser(f) {
    var serializedEarl = $(f).serialize();
    f.method = serializedEarl.length < 1800 ? 'get' : 'post';
    return true;
}

function verifyQuantity(str) {
    if (str.match("^[0-9]*[1-9][0-9]*$")) {
        var schedulesQty = $('#schedQty').val();
        var origQty = $('#originalQty').val();

        if (schedulesQty) {
            if (!isNaN(schedulesQty) && !isNaN(origQty) && !isNaN(str)) {
                var toIntSchedulesQty = parseInt(schedulesQty);
                var toIntStr = parseInt(str);
                if (toIntSchedulesQty > 0 && toIntStr < toIntSchedulesQty) {
                    schedulesHelp(str, origQty);
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        else {
            return true;
        }
    }
    else {
        document.getElementById('qty').style.border = '1px solid #c00';
        document.getElementById("pricingerrmsgs").innerHTML = detailInvalidQty;
        return false;
    }
}

function videoPopUp(url) {
    var mywindow;
    if (mywindow) {
        mywindow.close();
    }
    var leftPos = 0;
    var topPos = 0;
    var popupWidth = 850;
    var popupHeight = 675;
    if (screen) {
        leftPos = (screen.width - popupWidth) - 10;
        topPos = 10;
    }
    mywindow = window.open(url, '', 'width=' + popupWidth + ',height=' + popupHeight + ',left=' + leftPos + ',top=' + topPos + ',scrollbars=1,resizable=1');
    mywindow.focus();
}

function expandItemsIntialize(dis, size) {
    var x = $(dis).find(".more-expander-item").slice(size);
    if (x.length) {
        x.addClass("more-expander-toggle-item");
        var more = $(dis).find(".more-expander-toggle");
        var less = $(dis).find(".less-expander-toggle");

        more.text(txtMore);
        less.text(txtLess);

        more.bind("click", function () {
            $(dis).find(".more-expander-toggle-item").removeClass('hidden-row'); // show
            $(this).addClass('hidden-row'); // hide
            return false;
        });
        less.bind("click", function () {
            $(dis).find(".more-expander-toggle-item").addClass('hidden-row'); // hide
            $(dis).find(".more-expander-toggle").removeClass('hidden-row'); // show
            return false;
        });
        more.removeClass('hidden-row'); // show
        $(dis).find(".more-expander-toggle-item").addClass('hidden-row'); // hide
    }
    else {
        $(dis).find(".more-expander-toggle").addClass('hidden-row'); // hide
        $(dis).find(".less-expander-toggle").addClass('hidden-row'); // hide
    }
}

function trackAddToFavorites(dis) {
    var s =
        'ref_page_event=Get Add Favorite;'
        + 'page_content_group=' + (utag_data.page_content_group) + ';'
        + 'page_content_sub_group=Part Detail;'
        + 'page_title=Add Favorite;'
        + 'page_type=' + (utag_data.page_type) + ';'
        + 'page_sub_type=PD;'
        + 'page_id=FAV;'
        + 'pn_sku=' + (utag_data.pn_sku) + ';'
        + 'part_id=' + (utag_data.part_id) + ';'
        + 'ref_part_id=' + (utag_data.part_id) + ';'
        + 'supplier_id=' + (utag_data.supplier_id) + ';'
        + 'wt_dl=0;'
        + 'ref_page_event=Add Favorite;';
    $(dis).attr('track-data', s);
}

function expandImageClick(dis, eventType, imageType) {
    var s =
        'ref_page_event=' + eventType + ';'
        + 'asset_type=' + imageType + ';'
        + 'pn_sku=' + (utag_data.pn_sku) + ';'
        + 'part_id=' + (utag_data.part_id) + ';'
        + 'ref_part_id=' + (utag_data.part_id) + ';'
        + 'supplier_id=' + (utag_data.supplier_id) + ';'
    $(dis).attr('track-data', s);
}

function checkLeadTimeClick(dis) {
    var s =
        'ref_page_event=Get Check Lead Time;'
        + 'pn_sku=' + (utag_data.pn_sku) + ';'
        + 'part_id=' + (utag_data.part_id) + ';'
        + 'ref_part_id=' + (utag_data.part_id) + ';'
        + 'supplier_id=' + (utag_data.supplier_id) + ';'
    $(dis).attr('track-data', s);
}

function datasheetFileClick(dis, eventType) {
    var a = new RegExp('www.digikey.');

    if (a.test($(dis).attr('href'))) {
        var s =
            'ref_page_type=' + (utag_data.page_type) + ';'
            + 'ref_page_sub_type=' + (utag_data.page_sub_type) + ';'
            + 'ref_page_id=' + (utag_data.page_id) + ';'
            + 'asset_type=Datasheet;'
            + 'ref_page_event=' + eventType + ';'
            + 'ref_pn_sku=' + (utag_data.pn_sku) + ';'
            + 'ref_part_id=' + (utag_data.part_id) + ';'
            + 'ref_supplier_id=' + (utag_data.supplier_id);
        + 'page_title=' + ($(dis).text());
        $(dis).attr('cookie-tracking', s);
    }
    else {
        var t =
            'ref_page_event=' + eventType + ';'
            + 'asset_type=Datasheet;'
            + 'wt_dl=2;'
            + 'pn_sku=' + (utag_data.pn_sku) + ';'
            + 'part_id=' + (utag_data.part_id) + ';'
            + 'ref_part_id=' + (utag_data.part_id) + ';'
            + 'supplier_id=' + (utag_data.supplier_id) + ';'
            + 'page_title=' + ($(dis).text());
        $(dis).attr('track-data', t);
    }
}

function mediaFileClick(dis) {
    var a = new RegExp('www.digikey');

    if (a.test($(dis).attr('href'))) {
        var s =
            'ref_page_type=' + (utag_data.page_type) + ';'
            + 'ref_page_sub_type=' + (utag_data.page_sub_type) + ';'
            + 'ref_page_id=' + (utag_data.page_id) + ';'
            + 'ref_page_event=Get ' + ($(dis).closest('tr').children('th').text()) + ';'
            + 'ref_pn_sku=' + (utag_data.pn_sku) + ';'
            + 'ref_part_id=' + (utag_data.part_id) + ';'
            + 'ref_supplier_id=' + (utag_data.supplier_id) + ';'
            + 'page_title=' + ($(dis).text());
        $(dis).attr('cookie-tracking', s);
    }
    else {
        var t =
            'ref_page_event=Get ' + ($(dis).closest('tr').children('th').text()) + ';'
            + 'pn_sku=' + (utag_data.pn_sku) + ';'
            + 'part_id=' + (utag_data.part_id) + ';'
            + 'ref_part_id=' + (utag_data.part_id) + ';'
            + 'supplier_id=' + (utag_data.supplier_id) + ';'
            + 'page_title=' + ($(dis).text());
        $(dis).attr('track-data', t);
    }
}

function videoFileClick(dis) {

    if (($(dis).attr('href'))) {
        var s =
            'ref_page_type=' + (utag_data.page_type) + ';'
            + 'ref_page_sub_type=' + (utag_data.page_sub_type) + ';'
            + 'ref_page_id=' + (utag_data.page_id) + ';'
            + 'ref_page_event=Get Video File;'
            + 'ref_pn_sku=' + (utag_data.pn_sku) + ';'
            + 'ref_part_id=' + (utag_data.part_id) + ';'
            + 'ref_supplier_id=' + (utag_data.supplier_id) + ';'
            + 'page_title=' + ($(dis).text()) + ';'
            + 'video_source=Part_Detail';
        $(dis).attr('track-data', s);
    }
}

function appendWebTrendsTag(mediaFile) {
    var url = mediaFile.attr('href');
    var lowerUrl = url.toLowerCase();

    if (lowerUrl.indexOf("product_sku") < 0) {
        url = url
            + ((url.indexOf("?") >= 0) ? '&' : '?')
            + "pn_sku=" + (utag_data.pn_sku)
            + "&part_id=" + (utag_data.part_id);
    }
    mediaFile.attr("href", url);
}

function addWtCookieTrack(dis, pageEvent) {
    var s =
        'ref_page_type=' + (utag_data.page_type) + ';'
        + 'ref_page_sub_type=' + (utag_data.page_sub_type) + ';'
        + 'ref_page_id=' + (utag_data.page_id) + ';'
        + 'ref_page_event=' + pageEvent + ';'
        + 'ref_pn_sku=' + (utag_data.pn_sku) + ';'
        + 'ref_part_id=' + (utag_data.part_id) + ';'
        + 'ref_supplier_id=' + (utag_data.supplier_id);
    $(dis).attr('cookie-tracking', s);
}

function addWtAddtoCartCookieTrack(dis, pageEvent) {
    var s =
        'ref_page_type=' + (utag_data.page_type) + ';'
        + 'ref_page_sub_type=' + (utag_data.page_sub_type) + ';'
        + 'ref_page_id=' + (utag_data.page_id) + ';'
        + 'ref_page_event=' + pageEvent + ';'
        + 'ref_pn_sku=' + (utag_data.pn_sku) + ';'
        + 'ref_part_id=' + (utag_data.part_id) + ';'
        + 'ref_supplier_id=' + (utag_data.supplier_id) + ';'
        + 'ref_part_available=' + (utag_data.part_available) + ';'
        + 'ref_category=' + (utag_data.category) + ';'
        + 'ref_part_description=' + (utag_data.part_description) + ';'
        + 'ref_currency=' + (utag_data.page_currency) + ';';
    $(dis).attr('cookie-tracking', s);
}

function addVendorWtCookieTrack(dis) {
    var s =
        'ref_page_type=' + (utag_data.page_type) + ';'
        + 'ref_page_sub_type=' + (utag_data.page_sub_type) + ';'
        + 'ref_page_id=' + (utag_data.page_id) + ';'
        + 'ref_page_event=Link to Supplier' + ';'
        + 'ref_pn_sku=' + (utag_data.pn_sku) + ';'
        + 'ref_part_id=' + (utag_data.part_id) + ';'
    $(dis).attr('cookie-tracking', s);
}

function addPersonalizationTrackAlsoEval(dis) {

    var s = $(dis).attr('cookie-tracking');
    s +=
        ';personalization_program=Supplier Cookies;'
        + 'personalization_creative=Weighted Recommendation List;'
        ;
    $(dis).attr('cookie-tracking', s);
}

var isScrolledIntoView = function (elem) {
    var $elem = $(elem);
    var $window = $(window);
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $elem.offset().top;
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
}


function schedulesHelp(newQty, oldQty) {
    var origCref = $('#txt-origCref').val();
    var dialogText = $('#schedBodyText').val();
    $('#sched-dialog-body').text(dialogText);
    var btns = {};
    btns[$('#btn-cancelUpdate').val()] = function () {
        $(this).dialog("destroy");
        $('#update-orig-qty').val(oldQty);
        if ($('#txt-origCref').val().length > 0) {
            $('#update-cref').val(origCref);
        } else {
            $('#update-cref').val('');
        }
    };
    btns[$('#btn-confirmUpdate').val()] = function () {
        $(this).dialog("destroy");
        document.detform.submit(newQty);
    };

    $("#schedules-dialog").dialog({
        resizable: false,
        width: 400,
        height: 200,
        modal: true,
        closeOnEscape: true,
        open: function (e, ui) { $(".ui-dialog-titlebar-close").hide(); },
        close: function (e) { $(this).dialog('destroy').remove(); },
        buttons: btns
    });
}

var bomSelectedName;
var bomSelectId;

$("#bomform").on("submit", function (event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var addbombutton = $("#addtobombutton");
    addbombutton.attr("disabled", "disabled").css("display", "none");
    $("#addtobombuttonworking").show();
    $.post($(this).attr("action"), function (data, status) {
        bomModal(data);
    }).done(function () {
        $("#addtobombuttonworking").hide();
        addbombutton.removeAttr("disabled").css("display", "block");
    });
});

function shouldBomBeCalled(data) {
    var newBomName = data.HasBoms ? $("#bom-new").val() : $("#bom-newer").val();
    if ($(".bom-exists").is(":visible")) {

        if ($("input[name=bom]:checked").val() === "0" && $("a.chosen-default").length > 0 && newBomName) {
            return false;
        }
        else if ($("input[name=bom]:checked").val() === "1" && $("a.chosen-default").length === 0 && newBomName === '') {
            return false;
        }
        else {
            return !(newBomName === '' && $("a.chosen-default").length > 0);
        }
    } else {
        return (newBomName !== '');
    }
}

function bomModal(data) {
    var bomArea = $("#bomPopup");
    document.getElementById('bomQty').value = verifyQuantity(document.addform.qty.value) ? document.addform.qty.value : 0;
    document.getElementById('bomCref').value = document.addform.cref.value;

    if (data.Error) {
        bomError();
    } else {
        bomAddDialog(bomArea, data);
    }
}

function addPartToBom(data) {
    var AddModal = $("#bom-add");
    var bomInfo = $("#bom-info");
    var radiobutton = $("input[name=bom]:checked").val();
    var newBomName = data.HasBoms ? $("#bom-new").val() : $("#bom-newer").val();
    var result = createBomUrl(radiobutton, data.HasBoms);
    $("#bomPopup").dialog('close');

    if (data.HasBoms && (radiobutton === "0"))
        bomInfo.html(bomSelectedName);
    else {
        bomInfo.html(newBomName);
    }
    if (result) {
        var url = bomUrl + "/" + encodeURIComponent(result);
        $.post(url, $("#bomform").serialize(), function (data, status) {
            if (data.ViewUrl) {
                bomSuccessDialog(data, AddModal);
            }
            else {
                bomError();
            }
        });
    }
    else {
        resetBom();
    }
}

$("#bom-list").on('change', function () {
    bomSelectedName = $(this).find("option:selected").text();
    bomSelectId = $(this).find("option:selected").val();
});

function createBomUrl(radioButton, hasBoms) {
    var bomNewName = hasBoms ? $("input[name=bomName]").val() : $("input[name=bomNewName]").val();
    return (hasBoms && radioButton === "0") ? bomSelectId : bomNewName;
}

function populateBomSelect(data, bomSelectList, bomExists, noBom) {
    if (data.HasBoms) {
        if (data.BomList.length === 1) {
            bomSelectedName = data.BomList[0].BomName;
            bomSelectId = data.BomList[0].BomId;
        }

        $.each(data.BomList, function (key, value) {
            bomSelectList.append($("<option/>", {
                value: value.BomId,
                text: !value.BomName ? UnnamedBom : decodeURI(value.BomName)
            }));
        });
        bomSelectList.val(bomSelectList.find("option:first")).val();
        bomSelectList.trigger("chosen:updated");

        bomExists.css("display", "block");
        noBom.css("display", "none");
    }
    else {
        noBom.css("display", "block");
        bomExists.css("display", "none");
    }
}

function bomError() {
    $("#bomPopupError").dialog({
        resizable: false,
        modal: true,
        draggable: false,
        closeOnEscape: true,
        close: function (e) { $(this).dialog('close'); },
    });
}

function bomSuccessDialog(data, idName) {
    $(idName).dialog({
        resizable: false,
        modal: true,
        draggable: false,
        closeonescape: true,
        close: function (e) { $(this).dialog('close'); },
        buttons:
            [
                {
                    id: "viewBomBtn",
                    text: ViewBomButton,
                    click: function () { window.location.href = data.ViewUrl; }
                },
                {
                    id: "contShopFromBomBtn",
                    text: ContinueShoppingButton,
                    click: function () { $(this).dialog('close'); }
                }
            ]
    });
    $(".ui-widget-overlay").click(function () {
        $(AddModal).dialog('destroy');
        $(".ui-dialog-titlebar-close").trigger('close');
    });
}

function resetBom() {
    $("#bom-new").val('');
    $("#bom-newer").val('');
    bomSelectId = '';
    bomSelectName = '';
    $("#bom-lest").val('').trigger('chosen:updated');
}

function bomAddDialog(bomArea, data) {
    var noBom = $(".no-bom");
    var bomExists = $(".bom-exists");
    var bomSelectList = $("#bom-list");

    populateBomSelect(data, bomSelectList, bomExists, noBom);

    $(bomArea).dialog({
        resizable: false,
        modal: true,
        draggable: false,
        closeOnEscape: true,
        close: function (e) { bomSelectList.children('option').remove(); $(this).dialog('close'); },
        buttons:
            [
                {
                    id: "addBomBtn",
                    text: AddToBomButton,
                    click: function () { if (shouldBomBeCalled(data)) { addPartToBom(data); } }
                },
                {
                    id: "cancelBomBtn",
                    text: CancelButton,
                    click: function () { $(this).dialog('close'); }
                }
            ]
    });

    $(".ui-widget-overlay").click(function () {
        bomSelectList.children('option').remove();
        $(bomArea).dialog('destroy');
        $(".ui-dialog-titlebar-close").trigger('close');
    });
}

function leadTimeModal(event) {

    var data = {};
    $(".content-leadtime-form").serializeArray().map(function (x) { data[x.name] = x.value; });

    var json_var = JSON.stringify(data);
    var obj = JSON.parse(json_var);

    if (!obj.partid || obj.partid === 0) {
        var a = utag_data.part_id;
        obj.partid = a;
    }

    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    $.ajax({
        type: 'POST',
        url: leadTimeurl,
        data: obj,
        timeout: digireelTimeout,
        success: function (data) {
            $("#leadTimeHolder").html(data);
            $("#leadTimePopup").dialog({
                modal: true,
                width: 400,
                draggable: false,
                closeOnEscape: true,
                close: function (e) { $(this).dialog('destroy').remove(); },
                buttons: {
                    OK: function () {
                        $(this).dialog('destroy').remove();
                    }
                }

            });
            $(".ui-widget-overlay").click(function () {
                $("#leadTimePopup").dialog('destroy').remove();
                $(".ui-dialog-titlebar-close").trigger('click');
            });
        },
        error: function (request, status, error) {

            $("#leadTimeError").dialog({
                modal: true,
                draggable: false,
                closeOnEscape: true
            });

            $(".ui-widget-overlay").click(function () {
                $("#leadTimePopup").dialog('destroy').remove();
                $(".ui-dialog-titlebar-close").trigger('click');
            });
        }
    });
}

function leadtimeUpdate(event) {
    var data = {};
    $(".update-leadtime-form").serializeArray().map(function (x) { data[x.name] = x.value; });

    var json_var = JSON.stringify(data);
    var obj = JSON.parse(json_var);

    if (!obj.partid || obj.partid === 0) {
        var a = utag_data.part_id;
        obj.partid = a;
    }

    event.preventDefault ? event.preventDefault() : event.returnValue = false; //prevents the page from going to the digireelurl, also takes care of ie8 and firefox

    $.ajax({
        type: 'POST',
        url: leadTimeurl,
        data: obj,
        timeout: digireelTimeout,
        success: function (data) {
            $("#leadTimePopup").remove();
            $(".ui-dialog-titlebar-close").trigger('click');
            $("#leadTimeHolder").html(data);

            $("#leadTimePopup").dialog({
                modal: true,
                width: 400,
                draggable: false,
                closeOnEscape: true,
                close: function (e) { $(this).dialog('destroy').remove(); },
                buttons: {
                    OK: function () {
                        $(this).dialog('destroy').remove();
                    }
                },

            });
            $(".ui-widget-overlay").click(function () {
                $("#leadTimePopup").dialog('destroy').remove();
                $(".ui-dialog-titlebar-close").trigger('click');
            });
        },
        error: function (request, status, error) {

            $("#leadTimeError").dialog({
                modal: true,
                draggable: false,
                closeOnEscape: true
            });

            $(".ui-widget-overlay").click(function () {
                $("#leadTimePopup").dialog('destroy').remove();
                $(".ui-dialog-titlebar-close").trigger('click');
            });
        }
    });
}

function setUpdigireelForm(event) {
    var form = $(".content-digireelPricing-form").serialize();

    event.preventDefault ? event.preventDefault() : event.returnValue = false; //prevents the page from going to the digireelurl, also takes care of ie8 and firefox

    $.ajax({
        type: 'POST',
        url: digireelurl,
        data: form,
        timeout: digireelTimeout,
        success: function (data) {

            if (data.FlagMinimumQuantity !== true) {
                $("#calcPrice").html(data.CalculatedUnitPrice);
                $("#breakPrice").html(data.BreakPrice);
                $("#qty").val(data.Quantity);
                $("#errBreakPrice").css("display", "none");
            } else {
                $("#errBreakPrice").html("<b>" + data.Message + "</b>").css("display", "block");
                $("#keywordDigireel").html(data.Result);
                $("#qty").val(1);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            var id = $("input[name='quantity']");
            var regex = new RegExp("[-+]?([0-9a-z]*\.[0-9a-z]+|[0-9a-z]+)");
            if ((id.val().length === 0) || regex.test(id.val())) {
                $("#errmsgs").html(""); //let the error go
            } else {
                //check if there was an error in sending the request to a server
                $("#errmsgs").html("<b>" + digireelerr + "</b>");
            }
        }
    });
}

function setUpCarouselThumbnails() {

    $(".pictureSet").addClass("unselectedImg");
    var images = $(".pictureSet");

    //giving the lis in the ul picturelist an id for use when clicking on right and left arrows
    for (var i = 0; i < $(".pictureList li").find('a').length; i++) {
        $(".pictureList li").find('a').attr("id", function (i) {
            return i;
        });
    }

    //make the first picture have selected image
    jQuery(images[0]).children("img").addClass("selectedImg");
    //initialize first thumbnail to have border color of black
    $(".selectedImg").parent().css("border-color", "black");
}

function rightCarouselClick() {

    var tabToShow = $('.pictureList li:visible:last').next().children().attr("id");
    var tabMore = $('.pictureList li:visible:last').next().next().children().attr("id");
    var tabToHide = $('.pictureList li:visible:first').children().attr("id");
    var rightArrow = $(".right-arrow");
    var leftArrow = $(".left-arrow");
    if (tabToShow) {
        $('#' + tabToShow).parent('li').css("display", "inline-block");
        $('#' + tabToHide).parent('li').css("display", "none");
        leftArrow.addClass("leftArrowStyles");
        leftArrow.removeClass("leftArrowStylesBusted");
    }
    if (!tabMore) {
        rightArrow.addClass("rightArrowStylesBusted");
    }

}

function leftCarouselClick() {

    var tabToShow = $('.pictureList li:visible:first').prev().children().attr("id");
    var tabMore = $('.pictureList li:visible:first').prev().prev().children().attr("id");
    var tabToHide = $('.pictureList li:visible:last').children().attr("id");
    var rightArrow = $(".right-arrow");
    var leftArrow = $(".left-arrow");
    if (tabToShow) {
        $('#' + tabToShow).parent('li').css("display", "inline-block");
        $('#' + tabToHide).parent('li').css("display", "none");
        rightArrow.addClass("rightArrowStyles");
        rightArrow.removeClass("rightArrowStylesBusted");
    }
    if (!tabMore) {
        leftArrow.addClass("leftArrowStylesBusted");
    }
}

var selectedPic = "0";

$(".pictureSet").on("click", function () {

    var thisTitle = $(this).attr("title");
    var thisLink = $(this).attr("href");
    var thisId = $(this).attr("id");
    var thisOverlay = $(this).attr("data-overlay");
    var pictureSetImg = $(".pictureSet img");
    var productPhotoLarge = $(".product-photo-large");
    var productPhotoLargeImg = $(".product-photo-large img");
    var tummb = $(this).children("img");
    selectedPic = thisId;//used for the popup for fancy box on click

    pictureSetImg.removeClass("selectedImg"); //remove any other borders i suppose
    $(".overlay-img").removeClass("selectedImg");

    tummb.addClass("selectedImg");

    //change all the other thumbnails to have a grey border
    if (pictureSetImg.not("selectedImg")) {
        pictureSetImg.parent().css("border-color", "#fff");
    }
    //change the one we clicked to have a black border
    if (tummb.hasClass("selectedImg")) {
        tummb.parent().css("border-color", "black");
    }

    //determines the bigImage image to display, also determines if there should be an overlay on the big picture
    if ($(this).hasClass("overlay")) {

        productPhotoLarge.addClass("overlay-product-photo-large");

        if ($(".overlay-big-picture").length === 0) {
            productPhotoLargeImg.attr("title", thisTitle).attr("src", thisLink);
            productPhotoLarge.append("<img class='overlay-big-picture' src='" + thisOverlay + "' />");
        }
    }
    else {
        $('.overlay-big-picture').remove();
        productPhotoLarge.attr("title", thisTitle).attr("href", thisLink);
        productPhotoLargeImg.attr("title", thisTitle).attr("src", thisLink);
    }

    return false;
});

function detailSummary() {
    var f = $('[name=product-attribute-form]');
    var button = $("#prod-submit");
    var matchingRecords = $("#matching-records-count");

    matchingRecords.css("display", "none");
    button.addClass("disabled");
    button[0].disabled = true;

    f.contextId = 0;
    f.showRemaining = function () { if (f.contextId > 1) { matchingRecords.css("display", "inline-block"); } };
    f.updateEnabled = true;
    f.oldRecordCount = $("#detail-summary").html();
    f.resetRecordCount = function () { $("#detail-summary").html(f.oldRecordCount); this.disabled = false; button[0].disabled = false; };
    f.updateRecordCount = function () {
        if (this.updateEnabled) {
            this.contextId++;
            $.ajax({
                type: 'POST',
                url: summaryUrl,
                data: $(this).serialize() + "&contextId=" + this.contextId,
                timeout: digireelTimeout,
                success: function (data, status) {
                    if (data.contextId === f.contextId)
                        $('#detail-summary').html(data.msg);
                    f.find(":submit").each(function () {
                        if (data.nMatches) {
                            button.removeClass("disabled");
                            button[0].disabled = false;
                            f.showRemaining();
                        }
                    });
                },
                error: function () { f.resetRecordCount(); f.updateEnabled = false; }
            });
        }
    }
    var cb = f.find('input:checkbox');
    cb.click(function () { f.updateRecordCount(); });
    var catRadios = f.find('input:radio');
    catRadios.change(function () { f.updateRecordCount(); });
    f.updateRecordCount();
}


function getFavDialog(btns, loginurl, registerurl) {

    $("#fav-login").attr("href", loginurl);
    $("#fav-reg").attr("href", registerurl);


    $("#favoritesHolder").dialog({
        resizable: false,
        modal: true,
        draggable: false,
        closeOnEscape: true,
        close: function (e) { $(this).dialog('destroy'); },
        buttons: btns,
        width: "auto"
    });

    $(".ui-widget-overlay").click(function () {
        $("#favoritesHolder").dialog('destroy');
        $(".ui-dialog-titlebar-close").trigger('click');
    });


}

function AddPartToFavorites(PartId, PartEarl, viewButton, continueButton, loggedin) {

    if (loggedin === "0") {
        var btns = {};
        btns["OK"] = function () { $("#favoritesHolder").dialog('destroy'); };
        var loginurl = "/MyDigikey/Login?ReturnUrl=" + encodeURIComponent(PartEarl);
        var registerurl = "/MyDigikey/Register?ReturnUrl=" + encodeURIComponent(PartEarl);

        getFavDialog(btns, loginurl, registerurl);

    }
    else {
        $.ajax({
            cache: false,
            type: 'POST',
            url: "/BOM/Favorites/AddToFavorites",
            data: JSON.stringify({ partId: PartId }),
            contentType: 'application/json; charset=utf-8',
            timeout: digireelTimeout,
            success: function (data) {

                var btns = {};
                btns[viewButton] = function () {
                    window.location.href = "/BOM/Favorites";
                    $("#favoritesHolder").dialog('destroy');
                }
                btns[continueButton] = function () {
                    $("#favoritesHolder").dialog('destroy');
                }

                getFavDialog(btns, "", "");

            },
            error: function (request, status, error) {

                $("#favoritesError").dialog({
                    modal: true,
                    draggable: false,
                    closeOnEscape: true
                });
            }

        });
    }
}

function cal65PropModal() {
    $("#californiaPopUp").dialog({
        modal: true,
        width: 400,
        resizable: false,
        draggable: false,
        closeOnEscape: true,
        close: function (e) { $(this).dialog('close'); },
        buttons: [{
            id: "calOK",
            text: OkButton,
            click: function () { $(this).dialog('close'); }
        }]
    });

    $(".ui-widget-overlay").click(function () {
        $("#californiaPopUp").dialog('close');
        $(".ui-dialog-titlebar-close").trigger('click');
    });
}


function showCopy() {
    $(".clickButton").mouseenter(function () {
        $(this).find("span").show();
    }).mouseleave(function () {
        $(this).find(".copyNotice").html(Copy);
        $(this).find("span").hide();
    });

    $("#product-overview tr").mouseenter(function () {
        $(this).find(".clickButton").css("visibility", "visible");
        var $findContents = ($(this).find("td").first().text().trim());

        $(this).on("click", ".clickButton", function () {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($findContents).select();
            document.execCommand("copy");
            $(this).find(".copyNotice").html(Copied);
            $temp.remove();
        });
    }).mouseleave(function () {
        $(this).find(".clickButton").css("visibility", "hidden");
    });
}

function pDpPersonalizationImpression(isVendorOverrideInResults) {
    var utag = window['utag'];

    var data = {};
    data['personalization_program'] = 'Supplier Cookies';
    data['personalization_creative'] = 'Weighted Recommendation List';
    data['event_category'] = 'Personalization';
    data['ref_page_type'] = utag.data['page_type'];
    data['ref_page_sub_type'] = utag.data['page_sub_type'];
    data['ref_page_id'] = utag.data['page_id'];
    data['ref_page_event'] = 'Impression';
    data['not_a_pageview'] = '1';
    data['page_site'] = utag.data['page_site'];
    data['page_language'] = utag.data['page_language'];
    data['event_domain'] = utag.data['event_domain'];
    data['event_url'] = utag.data['dom.pathname'];
    data['event_query'] = utag.data['dom.query'];
    data['wt_dl'] = '2';
    data['wt_use_udo'] = 'true';

    if (isVendorOverrideInResults) {
        data['personalization_vendor'] = '1';
    }
    else {
        data['personalization_vendor'] = '0';
    }

    utag.link(data);
}

$(window).load(function () {

    if (vendorOverride) {

        var isAlsoEvaluated = document.getElementsByClassName("product-details-additional-interested").length > 0;

        if (isAlsoEvaluated && isVendorOverrideInResults) {
            pDpPersonalizationImpression(isVendorOverrideInResults);
        }
    }
});

function updateTimeToShip() {
    function fixTimeformat(num) {
        return "0" + num;
    }

    if (shipTime) {
        var now = new Date();
        var date8pm = new Date(shipTime);
        var diff = date8pm - now;

        if (diff > 0) {
            var msec = diff;
            //find the hours left
            var hh = Math.floor(msec / 1000 / 60 / 60);
            msec -= hh * 1000 * 60 * 60;

            //find the mins left
            var mm = Math.floor(msec / 1000 / 60);
            msec -= mm * 1000 * 60;

            //find the secs left
            var ss = Math.floor(msec / 1000);
            msec -= ss * 1000;

            var format = typeof shipTimerFormat !== 'undefined' ? shipTimerFormat : __headerData.timeToShipFormat;
            var availTimerCounter = document.getElementsByClassName('availability__timer__counter')[0];
            availTimerCounter.innerHTML = format.replace('{0}', hh).replace('{1}', mm).replace('{2}', ss);
        } else {
            var countdownMsgNull = document.getElementsByClassName('countdownMsg')[0];
            countdownMsgNull.innerHTML = "";

            var availTimerCounterNull = document.getElementsByClassName('availability__timer__counter')[0];
            availTimerCounterNull.innerHTML = "";
        }
    } else {
        clearInterval();
        clearShippingContainer();
    }
}

function setTimeToShip() {
    // If shipTimerFormat exists then we can display the countdown
    if (shipTimerFormat) {
        setInterval(this.updateTimeToShip, 1000);
    } else {
        clearShippingContainer();
    }
}

function clearShippingContainer() {
    // Clear out the contents
    var timetoship = document.getElementsByClassName('pricing-timetoship')[0];

    if (timetoship) {
        timetoship.innerHTML = "";
    }
};
function buildShortyRequest(longUrl, ipAddress, httpMethod, postBody, id) {
    var shortFetch = shortUrl;
    
    var paramsDAO = {
        "url": longUrl,
        "ip_address": ipAddress,
        "method": httpMethod,
        "body": postBody
    };

    $.post(shortFetch, { paramsDAO: JSON.stringify(paramsDAO) },function (result) {
        if (result.Short) {
            $('#shortUrlValue').val(result.Short);
            shortDialog(result.Short);
        }
        else {
            shortDialog('error');
        }
    }, 'json').fail(function (xhr, msg) { shortDialog('error');});
}

function shortInit(id) {
    var ipAddress = $('#ipPH').val();
    var httpMethod = $('#methodPH').val();
    var currentShort = $('#shortUrlValue').val();
    var earlPH = $('#earlPH').val();
    var longUrl = $('#earlLong').val();
    if (location.href.match(/short/)) {
        shortDialog(location.href);
    }
    else if (currentShort.length != 0) {
        shortDialog(currentShort);
    }
    else {
        if (httpMethod == 0) {
            buildShortyRequest(longUrl, ipAddress, "get", '', id);
        }
        else if (httpMethod == 1) {
            buildShortyRequest(longUrl, ipAddress, "post", earlPH, id);
        }
    }
    return false;
}

function shortDialog(shortenUrl) {
    if (!shortenUrl.match(/error/)) {
        var nameToShare = document.title;
        var encodedUrl = encodeURIComponent(shortenUrl);
        $('#shortUrlTextbox').val(shortenUrl);
        $('#shortUrlPopup').dialog({
            modal: true,
            closeOnEscape: true,
            open: function (e, ui) {
                $('#shortUrlTextbox').focus(function () { $(this).select(); });
                $('#shortUrlTextbox').focus();
                $("#facebookShare").attr("href", "https://facebook.com/sharer/sharer.php?u=" + shortenUrl);
                $("#googlePlusShare").attr("href", "https://plus.google.com/share?url=" + shortenUrl);
                $("#twitterShare").attr("href", "https://twitter.com/intent/tweet/?text=" + encodeURIComponent(nameToShare) + "&url=" + encodedUrl);
                $("#linkedInShare").attr("href", "https://www.linkedin.com/sharing/share-offsite/?url=" + shortenUrl + "&title=" + encodeURIComponent(nameToShare));
                $("#weiboShare").attr("href", "http://service.weibo.com/share/share.php?url=" + shortenUrl + "&appkey=&title=" + nameToShare + "&pic=&ralateUid=");
                $("#renrenShare").attr("href", "http://widget.renren.com/dialog/share?resourceUrl=" + shortenUrl + "&srcUrl=" + shortenUrl + "&title=" + nameToShare);
                $("#qzoneShare").attr("href", "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + shortenUrl);
                $("#xingShare").attr("href", "https://www.xing.com/app/user?op=share&url=" + shortenUrl);
                $("#emailShare").attr("href", "mailto:?subject=" + nameToShare + "&body=" + shortenUrl);
                //$("#whatsappShare").attr("href", "whatsapp://send?text=" + shortenUrl);
            }
        })
    }
    else {
        $('#shortUrlPopupError').dialog({
            modal: true,
            closeOnEscape: true
        })
    }

    $(".ui-widget-overlay").click(function () {
        $(".ui-dialog-titlebar-close").trigger('click');
    });
}

function filterSelect() {
    if ($("select[name=v] option").size() == 2) {
        $("select[name=v] option:eq(1)").attr("selected", "selected");
        $("select[name=v]").trigger("chosen:updated");
    } else {
        $("select[name=v] option:eq(0)").attr("selected", "selected");
        $("select[name=v]").trigger("chosen:updated");
    }
}

function checkEnter(e) {
    var key = e.which;
    if (key == 13) {
        if (($(".chosen-results li").length >= 1) || $("#search-keyword").val()) {
            $("#keywordSearchForm").submit();
        }
    }
}

function addWebtrendCookieTrack(dis, x) {
    var s =
        'ref_page_type=' + (utag_data.page_type) + ';'
        + 'ref_page_sub_type=' + (utag_data.page_sub_type) + ';'
        + 'ref_page_id=' + (utag_data.page_id) + ';'
    if (utag_data.part_search_term) {
        s += 'ref_part_search_term=' + (utag_data.part_search_term) + ';'
    }
    if (utag_data.page_id == 'CTN') {
        s+= 'ref_page_event=Select Family - New Prod;'
    }
    else {
        s+= 'ref_page_event=' + x + ';'
    }
    $(dis).attr('cookie-tracking', s);
}

function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

$(document).ready(function () {
    moveFilterButtons();
    //resizeInputs();
});

$(window).scroll(function () {
    moveFilterButtons();
});

$(window).resize(function () {
    moveFilterButtons();
    //resizeInputs();
});

function moveFilterButtons() {
    if ($("#filters-panel").length) {
        var scrollTrigger = document.getElementById("filters-buttons-toggle");
        var anotherScrollTrigger = document.getElementById("applied-filters");
        var filterContainer = document.getElementById("filters-panel");
        var buttons = document.getElementById("filters-buttons");
        var distanceToSide = $("#content").offset();
        var contentWidth = $("#content").width();
        if (__helpers.checkVisible(filterContainer)) {
            if (__helpers.checkVisible(scrollTrigger) || __helpers.checkVisible(anotherScrollTrigger)) {
                buttons.className = "";
                buttons.style.left = "0px";

            } else if (!__helpers.checkVisible(scrollTrigger) || !__helpers.checkVisible(anotherScrollTrigger)) {
                buttons.className = 'floating';
                buttons.style.left = distanceToSide.left + 20 + "px";
                buttons.style.width = contentWidth - 20 + "px";
            }
        } else {
            buttons.className = "";
            buttons.style.left = "0px";
        }
    }
}


// didnt use as it causes issues with the size between mobile and desktop
function resizeInputs() {
    var screenWidth = $(window).width();
    if (screenWidth <= "500") {
        $(".filter-selectors").each(function () {
            var optionCount = $(this).children().length;
            if (optionCount < 10) {
                $(this).attr("size", optionCount);
            }
        });
    } else {
        $(".filter-selectors").each(function () {
            $(this).attr("size", "10");
        });
    }
}

//if (document.getElementById("filters-buttons")) {
//    window.addEventListener('scroll', moveFilterButtons());
//    window.onload = moveFilterButtons();
//}

$(document).ready(function () {    
    $('.dk-sharelink').click(function () { shortInit(this.id); });
    if ($(".digi-chosen").length) {
        $('.digi-chosen').chosen({ search_contains: true, allow_single_deselect: true, disable_search_threshold: 5, width: "50%" });
        $('.digi-chosen').on('chosen:no_results', function () { $(".no-results").remove(); });
        $(".chosen-container").bind('keyup', function (e) { checkEnter(e); });
        $(".digi-chosen").change(function (e) { addMfrSelectionToStorage(); $("#keywordSearchForm").submit();});
        $(".catfilters").each(function () { addWebtrendCookieTrack($(this), 'Select Family'); });
        $("#catfiltersubid").each(function () { addWebtrendCookieTrack($(this), 'Select Family'); });
        $("#qpLinkList").each(function () { addWebtrendCookieTrack($(this), 'Select Family'); });
        $("#exactPartList").each(function () { addWebtrendCookieTrack($(this), 'Exact Match'); });
        filterSelect();
        $(".search-form").submit(function () {
            $('.primarykeyword').val($('.search-input').val());
        });        
    }
  
    if ($(".stacked-filters-group")[0]) {
        if (__helpers.getQueryStringValue("sf") == "1") {
            document.attform.sf.value = "1";
            $("#scrollit div.stacked-filters-group").addClass("show-all");
        } else {
            document.attform.sf.value = "0";
            $("#scrollit div.stacked-filters-group").removeClass("show-all");
        }
        $(".stacked-filters-group").css("height", $(".stacked-filters-group > div").height() + 20 + "px");
        moreLessFilters();        
    }
    else if ($(".scroll-group")[0]) {
        document.attform.sf.value = "0";        
    }

    if ($("#results-sort").length) {
        if (document.srform.ColumnSort.value != "0") {
            $("#results-sort option[value='" + document.attform.ColumnSort.value + "']").attr("selected", "selected");
        }
    }
    $(".breadcrumbs a").click(function () { clearNewSelectedFromBrowser(); clearSelectedFromBrowser(); });
});

$(function () {
    if ($("#results-sort").length) {
        $(document).on('change', '#results-sort', function () {
            document.attform.ColumnSort.value = $("#results-sort").val();
        });
    }
});

var w = 0;
$(window).load(function () {
    w = $(window).width();
});

$(window).resize(function () {
    if (w != $(window).width()) {
        if (w <= 768) {
            toggleFilterToggle(0);
        }
        else {
            toggleFilterToggle(1);
        }
        if ($(".stacked-filters-group")[0]) {
            moreLessFilters();
        }
        w = $(window).width();
        delete w;
    }
});

function moreLessFilters() {
    if (isOverflown($("#scrollit div.stacked-filters-group")[0]) || document.attform.sf.value == "1") {
        if ($(".stacked-filters-group").height() <= $(".stacked-filters-group > div").height() + 20 && document.attform.sf.value == "1") {
            $(".filters-group-more-less").hide();
        } else {
            $(".filters-group-more-less").show();
            moveFilterButtons();
        }
    } else {
        $(".filters-group-more-less").hide();
        $("#scrollit div.stacked-filters-group").removeClass("show-all");
    }
    
    $("#more-filters").click(function () {
        $("#scrollit div.stacked-filters-group").addClass("show-all");
        $("form[name='compform']").floatingScroll("update");
        document.attform.sf.value = "1";
        moveFilterButtons();
    })

    $("#less-filters").click(function () {
        $("#scrollit div.stacked-filters-group").removeClass("show-all");
        $("form[name='compform']").floatingScroll("update");
        document.getElementById('content').scrollIntoView(true);
        document.attform.sf.value = "0";
    })
}

$("#filter-switch-checkbox").click(function () {
    $("#filters-group").toggleClass("stacked-filters-group");
    $("#filters-group").toggleClass("scroll-group");
    $("#scrolling").toggleClass("selected-toggle");
    $("#stacked").toggleClass("selected-toggle");
    if (document.attform.sv.value == "0") {
        document.attform.sv.value = "1";
    }
    else if (document.attform.sv.value == "1"){
        document.attform.sv.value = "0";
    }
    if ($("#scrollit div.scroll-group")[0]) {
        $(".scroll-group").css("height", $(".scroll-group > div").height() + 35 + "px");
        $(".filters-group-more-less").hide();
        moveFilterButtons();
        utag.dkLink("ref_page_event=Change Parametric Search Presentation;page_state=Scrolling Parametric Search");
    }
    else if ($("#scrollit div.stacked-filters-group")[0]) {
        $(".stacked-filters-group").css("height", $(".stacked-filters-group > div").height() + 20 + "px");         
        moreLessFilters();
        utag.dkLink("ref_page_event=Change Parametric Search Presentation;page_state=Stacked Parametric Search");
    }
});

function toggleFilterToggle(svVal) {
    if (svVal == 0) {
        $("#filters-group").removeClass("scroll-group");
        $("#filters-group").addClass("stacked-filters-group");
    }
    else if (svVal == 1) {
        var inVal = $("#filter-switch :input[name=sv]").val();
        if (inVal == "0") {
            $("#filters-group").removeClass("scroll-group");
            $("#filters-group").addClass("stacked-filters-group");
            $(".filters-group-more-less").show();
        }
        else if (inVal == "1") {
            $("#filters-group").removeClass("stacked-filters-group");
            $("#filters-group").addClass("scroll-group");
            $(".filters-group-more-less").hide();
        }
    }
}

function clearNewSelectedFromBrowser() {
    if (sessionStorage.getItem("new_selected_params")) {
        sessionStorage.removeItem("new_selected_params");
    }
}
function clearSelectedFromBrowser() {
    if (sessionStorage.getItem("selected_params")) {
        sessionStorage.removeItem("selected_params");
    }
}

function addMfrSelectionToStorage() {
    let str = "";    
    let self = $(".digi-chosen");
    let name = self.attr('name');
    str ="'" + name + "':\"['Table':'" + self.val() + "']\"";   

    sessionStorage.setItem("new_selected_params", str);
    sessionStorage.setItem("selected_params", str);
};;
function dlgHelp(language,res) {
    var url = "/products/helpdialog/" + language + "/" + encodeURIComponent(res);

   
    var btns = {};

    $.get(url, function (data, status) {
        var dlg = $(data);

        btns[dlg.attr("close")] = function () { $(this).dialog("close"); };

        dlg.dialog({
            resizable: false,
            modal: true,
            draggable: false,
            closeOnEscape: true,
            close: function (e) { $(this).dialog('destroy').remove(); },
            buttons: btns,
            width: "auto",
            create: function (event, ui) {
                // Set maxWidth
                $(this).css({ "maxWidth": "660px", "margin":"10px"});
            }
        });


        $(".ui-widget-overlay").click(function () {
            $("#helpPopUp").dialog('destroy').remove()
            $(".ui-dialog-titlebar-close").trigger('click');
        });
    });

    
};
/* Chosen v1.1.0 | (c) 2011-2013 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
!function () { var a, AbstractChosen, Chosen, SelectParser, b, c = {}.hasOwnProperty, d = function (a, b) { function d() { this.constructor = a } for (var e in b) c.call(b, e) && (a[e] = b[e]); return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a }; SelectParser = function () { function SelectParser() { this.options_index = 0, this.parsed = [] } return SelectParser.prototype.add_node = function (a) { return "OPTGROUP" === a.nodeName.toUpperCase() ? this.add_group(a) : this.add_option(a) }, SelectParser.prototype.add_group = function (a) { var b, c, d, e, f, g; for (b = this.parsed.length, this.parsed.push({ array_index: b, group: !0, label: this.escapeExpression(a.label), children: 0, disabled: a.disabled }), f = a.childNodes, g = [], d = 0, e = f.length; e > d; d++)c = f[d], g.push(this.add_option(c, b, a.disabled)); return g }, SelectParser.prototype.add_option = function (a, b, c) { return "OPTION" === a.nodeName.toUpperCase() ? ("" !== a.text ? (null != b && (this.parsed[b].children += 1), this.parsed.push({ array_index: this.parsed.length, options_index: this.options_index, value: a.value, text: a.text, html: a.innerHTML, selected: a.selected, disabled: c === !0 ? c : a.disabled, group_array_index: b, classes: a.className, style: a.style.cssText })) : this.parsed.push({ array_index: this.parsed.length, options_index: this.options_index, empty: !0 }), this.options_index += 1) : void 0 }, SelectParser.prototype.escapeExpression = function (a) { var b, c; return null == a || a === !1 ? "" : /[\&\<\>\"\'\`]/.test(a) ? (b = { "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, c = /&(?!\w+;)|[\<\>\"\'\`]/g, a.replace(c, function (a) { return b[a] || "&amp;" })) : a }, SelectParser }(), SelectParser.select_to_array = function (a) { var b, c, d, e, f; for (c = new SelectParser, f = a.childNodes, d = 0, e = f.length; e > d; d++)b = f[d], c.add_node(b); return c.parsed }, AbstractChosen = function () { function AbstractChosen(a, b) { this.form_field = a, this.options = null != b ? b : {}, AbstractChosen.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers()) } return AbstractChosen.prototype.set_default_values = function () { var a = this; return this.click_test_action = function (b) { return a.test_active_click(b) }, this.activate_action = function (b) { return a.activate_field(b) }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0 }, AbstractChosen.prototype.set_default_text = function () { return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text }, AbstractChosen.prototype.mouse_enter = function () { return this.mouse_on_container = !0 }, AbstractChosen.prototype.mouse_leave = function () { return this.mouse_on_container = !1 }, AbstractChosen.prototype.input_focus = function () { var a = this; if (this.is_multiple) { if (!this.active_field) return setTimeout(function () { return a.container_mousedown() }, 50) } else if (!this.active_field) return this.activate_field() }, AbstractChosen.prototype.input_blur = function () { var a = this; return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function () { return a.blur_test() }, 100)) }, AbstractChosen.prototype.results_option_build = function (a) { var b, c, d, e, f; for (b = "", f = this.results_data, d = 0, e = f.length; e > d; d++)c = f[d], b += c.group ? this.result_add_group(c) : this.result_add_option(c), (null != a ? a.first : void 0) && (c.selected && this.is_multiple ? this.choice_build(c) : c.selected && !this.is_multiple && this.single_set_selected_text(c.text)); return b }, AbstractChosen.prototype.result_add_option = function (a) { var b, c; return a.search_match ? this.include_option_in_results(a) ? (b = [], a.disabled || a.selected && this.is_multiple || b.push("active-result"), !a.disabled || a.selected && this.is_multiple || b.push("disabled-result"), a.selected && b.push("result-selected"), null != a.group_array_index && b.push("group-option"), "" !== a.classes && b.push(a.classes), c = document.createElement("li"), c.className = b.join(" "), c.style.cssText = a.style, c.setAttribute("data-option-array-index", a.array_index), c.innerHTML = a.search_text, this.outerHTML(c)) : "" : "" }, AbstractChosen.prototype.result_add_group = function (a) { var b; return a.search_match || a.group_match ? a.active_options > 0 ? (b = document.createElement("li"), b.className = "group-result", b.innerHTML = a.search_text, this.outerHTML(b)) : "" : "" }, AbstractChosen.prototype.results_update_field = function () { return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0 }, AbstractChosen.prototype.reset_single_select_options = function () { var a, b, c, d, e; for (d = this.results_data, e = [], b = 0, c = d.length; c > b; b++)a = d[b], a.selected ? e.push(a.selected = !1) : e.push(void 0); return e }, AbstractChosen.prototype.results_toggle = function () { return this.results_showing ? this.results_hide() : this.results_show() }, AbstractChosen.prototype.results_search = function () { return this.results_showing ? this.winnow_results() : this.results_show() }, AbstractChosen.prototype.winnow_results = function () { var a, b, c, d, e, f, g, h, i, j, k, l, m; for (this.no_results_clear(), e = 0, g = this.get_search_text(), a = g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), d = this.search_contains ? "" : "^", c = new RegExp(d + a, "i"), j = new RegExp(a, "i"), m = this.results_data, k = 0, l = m.length; l > k; k++)b = m[k], b.search_match = !1, f = null, this.include_option_in_results(b) && (b.group && (b.group_match = !1, b.active_options = 0), null != b.group_array_index && this.results_data[b.group_array_index] && (f = this.results_data[b.group_array_index], 0 === f.active_options && f.search_match && (e += 1), f.active_options += 1), (!b.group || this.group_search) && (b.search_text = b.group ? b.label : b.html, b.search_match = this.search_string_match(b.search_text, c), b.search_match && !b.group && (e += 1), b.search_match ? (g.length && (h = b.search_text.search(j), i = b.search_text.substr(0, h + g.length) + "</em>" + b.search_text.substr(h + g.length), b.search_text = i.substr(0, h) + "<em>" + i.substr(h)), null != f && (f.group_match = !0)) : null != b.group_array_index && this.results_data[b.group_array_index].search_match && (b.search_match = !0))); return this.result_clear_highlight(), 1 > e && g.length ? (this.update_results_content(""), this.no_results(g)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight()) }, AbstractChosen.prototype.search_string_match = function (a, b) { var c, d, e, f; if (b.test(a)) return !0; if (this.enable_split_word_search && (a.indexOf(" ") >= 0 || 0 === a.indexOf("[")) && (d = a.replace(/\[|\]/g, "").split(" "), d.length)) for (e = 0, f = d.length; f > e; e++)if (c = d[e], b.test(c)) return !0 }, AbstractChosen.prototype.choices_count = function () { var a, b, c, d; if (null != this.selected_option_count) return this.selected_option_count; for (this.selected_option_count = 0, d = this.form_field.options, b = 0, c = d.length; c > b; b++)a = d[b], a.selected && (this.selected_option_count += 1); return this.selected_option_count }, AbstractChosen.prototype.choices_click = function (a) { return a.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show() }, AbstractChosen.prototype.keyup_checker = function (a) { var b, c; switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), b) { case 8: if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke(); if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search(); break; case 13: if (a.preventDefault(), this.results_showing) return this.result_select(a); break; case 27: return this.results_showing && this.results_hide(), !0; case 9: case 38: case 40: case 16: case 91: case 17: break; default: return this.results_search() } }, AbstractChosen.prototype.clipboard_event_checker = function () { var a = this; return setTimeout(function () { return a.results_search() }, 50) }, AbstractChosen.prototype.container_width = function () { return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px" }, AbstractChosen.prototype.include_option_in_results = function (a) { return this.is_multiple && !this.display_selected_options && a.selected ? !1 : !this.display_disabled_options && a.disabled ? !1 : a.empty ? !1 : !0 }, AbstractChosen.prototype.search_results_touchstart = function (a) { return this.touch_started = !0, this.search_results_mouseover(a) }, AbstractChosen.prototype.search_results_touchmove = function (a) { return this.touch_started = !1, this.search_results_mouseout(a) }, AbstractChosen.prototype.search_results_touchend = function (a) { return this.touch_started ? this.search_results_mouseup(a) : void 0 }, AbstractChosen.prototype.outerHTML = function (a) { var b; return a.outerHTML ? a.outerHTML : (b = document.createElement("div"), b.appendChild(a), b.innerHTML) }, AbstractChosen.browser_is_supported = function () { return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !0 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !0 : !0 }, AbstractChosen.default_multiple_text = "Select Some Options", AbstractChosen.default_single_text = "Select an Option", AbstractChosen.default_no_result_text = "No results match", AbstractChosen }(), a = jQuery, a.fn.extend({ chosen: function (b) { return AbstractChosen.browser_is_supported() ? this.each(function () { var c, d; c = a(this), d = c.data("chosen"), "destroy" === b && d ? d.destroy() : d || c.data("chosen", new Chosen(this, b)) }) : this } }), Chosen = function (c) { function Chosen() { return b = Chosen.__super__.constructor.apply(this, arguments) } return d(Chosen, c), Chosen.prototype.setup = function () { return this.form_field_jq = a(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl") }, Chosen.prototype.set_up_html = function () { var b, c; return b = ["chosen-container"], b.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && b.push(this.form_field.className), this.is_rtl && b.push("chosen-rtl"), c = { "class": b.join(" "), style: "width: " + this.container_width() + ";", title: this.form_field.title }, this.form_field.id.length && (c.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = a("<div />", c), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior(), this.form_field_jq.trigger("chosen:ready", { chosen: this }) }, Chosen.prototype.register_observers = function () { var a = this; return this.container.bind("mousedown.chosen", function (b) { a.container_mousedown(b) }), this.container.bind("mouseup.chosen", function (b) { a.container_mouseup(b) }), this.container.bind("mouseenter.chosen", function (b) { a.mouse_enter(b) }), this.container.bind("mouseleave.chosen", function (b) { a.mouse_leave(b) }), this.search_results.bind("mouseup.chosen", function (b) { a.search_results_mouseup(b) }), this.search_results.bind("mouseover.chosen", function (b) { a.search_results_mouseover(b) }), this.search_results.bind("mouseout.chosen", function (b) { a.search_results_mouseout(b) }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (b) { a.search_results_mousewheel(b) }), this.search_results.bind("touchstart.chosen", function (b) { a.search_results_touchstart(b) }), this.search_results.bind("touchmove.chosen", function (b) { a.search_results_touchmove(b) }), this.search_results.bind("touchend.chosen", function (b) { a.search_results_touchend(b) }), this.form_field_jq.bind("chosen:updated.chosen", function (b) { a.results_update_field(b) }), this.form_field_jq.bind("chosen:activate.chosen", function (b) { a.activate_field(b) }), this.form_field_jq.bind("chosen:open.chosen", function (b) { a.container_mousedown(b) }), this.form_field_jq.bind("chosen:close.chosen", function (b) { a.input_blur(b) }), this.search_field.bind("blur.chosen", function (b) { a.input_blur(b) }), this.search_field.bind("keyup.chosen", function (b) { a.keyup_checker(b) }), this.search_field.bind("keydown.chosen", function (b) { a.keydown_checker(b) }), this.search_field.bind("focus.chosen", function (b) { a.input_focus(b) }), this.search_field.bind("cut.chosen", function (b) { a.clipboard_event_checker(b) }), this.search_field.bind("paste.chosen", function (b) { a.clipboard_event_checker(b) }), this.is_multiple ? this.search_choices.bind("click.chosen", function (b) { a.choices_click(b) }) : this.container.bind("click.chosen", function (a) { a.preventDefault() }) }, Chosen.prototype.destroy = function () { return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show() }, Chosen.prototype.search_field_disabled = function () { return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action)) }, Chosen.prototype.container_mousedown = function (b) { return this.is_disabled || (b && "mousedown" === b.type && !this.results_showing && b.preventDefault(), null != b && a(b.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !b || a(b.target)[0] !== this.selected_item[0] && !a(b.target).parents("a.chosen-single").length || (b.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), a(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field()) }, Chosen.prototype.container_mouseup = function (a) { return "ABBR" !== a.target.nodeName || this.is_disabled ? void 0 : this.results_reset(a) }, Chosen.prototype.search_results_mousewheel = function (a) { var b; return a.originalEvent && (b = -a.originalEvent.wheelDelta || a.originalEvent.detail), null != b ? (a.preventDefault(), "DOMMouseScroll" === a.type && (b = 40 * b), this.search_results.scrollTop(b + this.search_results.scrollTop())) : void 0 }, Chosen.prototype.blur_test = function () { return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0 }, Chosen.prototype.close_field = function () { return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale() }, Chosen.prototype.activate_field = function () { return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus() }, Chosen.prototype.test_active_click = function (b) { var c; return c = a(b.target).closest(".chosen-container"), c.length && this.container[0] === c[0] ? this.active_field = !0 : this.close_field() }, Chosen.prototype.results_build = function () { return this.parsing = !0, this.selected_option_count = null, this.results_data = SelectParser.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({ first: !0 })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1 }, Chosen.prototype.result_do_highlight = function (a) { var b, c, d, e, f; if (a.length) { if (this.result_clear_highlight(), this.result_highlight = a, this.result_highlight.addClass("highlighted"), d = parseInt(this.search_results.css("maxHeight"), 10), f = this.search_results.scrollTop(), e = d + f, c = this.result_highlight.position().top + this.search_results.scrollTop(), b = c + this.result_highlight.outerHeight(), b >= e) return this.search_results.scrollTop(b - d > 0 ? b - d : 0); if (f > c) return this.search_results.scrollTop(c) } }, Chosen.prototype.result_clear_highlight = function () { return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null }, Chosen.prototype.results_show = function () { return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", { chosen: this }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", { chosen: this })) }, Chosen.prototype.update_results_content = function (a) { return this.search_results.html(a) }, Chosen.prototype.results_hide = function () { return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", { chosen: this })), this.results_showing = !1 }, Chosen.prototype.set_tab_index = function () { var a; return this.form_field.tabIndex ? (a = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = a) : void 0 }, Chosen.prototype.set_label_behavior = function () { var b = this; return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = a("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function (a) { return b.is_multiple ? b.container_mousedown(a) : b.activate_field() }) : void 0 }, Chosen.prototype.show_search_field_default = function () { return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default")) }, Chosen.prototype.search_results_mouseup = function (b) { var c; return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c.length ? (this.result_highlight = c, this.result_select(b), this.search_field.focus()) : void 0 }, Chosen.prototype.search_results_mouseover = function (b) { var c; return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c ? this.result_do_highlight(c) : void 0 }, Chosen.prototype.search_results_mouseout = function (b) { return a(b.target).hasClass("active-result") ? this.result_clear_highlight() : void 0 }, Chosen.prototype.choice_build = function (b) { var c, d, e = this; return c = a("<li />", { "class": "search-choice" }).html("<span>" + b.html + "</span>"), b.disabled ? c.addClass("search-choice-disabled") : (d = a("<a />", { "class": "search-choice-close", "data-option-array-index": b.array_index }), d.bind("click.chosen", function (a) { return e.choice_destroy_link_click(a) }), c.append(d)), this.search_container.before(c) }, Chosen.prototype.choice_destroy_link_click = function (b) { return b.preventDefault(), b.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(a(b.target)) }, Chosen.prototype.choice_destroy = function (a) { return this.result_deselect(a[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), a.parents("li").first().remove(), this.search_field_scale()) : void 0 }, Chosen.prototype.results_reset = function () { return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0 }, Chosen.prototype.results_reset_cleanup = function () { return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove() }, Chosen.prototype.result_select = function (a) { var b, c; return this.result_highlight ? (b = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", { chosen: this }), !1) : (this.is_multiple ? b.removeClass("active-result") : this.reset_single_select_options(), c = this.results_data[b[0].getAttribute("data-option-array-index")], c.selected = !0, this.form_field.options[c.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(c) : this.single_set_selected_text(c.text), (a.metaKey || a.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", { selected: this.form_field.options[c.options_index].value }), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale())) : void 0 }, Chosen.prototype.single_set_selected_text = function (a) { return null == a && (a = this.default_text), a === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").text(a) }, Chosen.prototype.result_deselect = function (a) { var b; return b = this.results_data[a], this.form_field.options[b.options_index].disabled ? !1 : (b.selected = !1, this.form_field.options[b.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", { deselected: this.form_field.options[b.options_index].value }), this.search_field_scale(), !0) }, Chosen.prototype.single_deselect_control_build = function () { return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0 }, Chosen.prototype.get_search_text = function () { return this.search_field.val() === this.default_text ? "" : a("<div/>").text(a.trim(this.search_field.val())).html() }, Chosen.prototype.winnow_results_set_highlight = function () { var a, b; return b = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), a = b.length ? b.first() : this.search_results.find(".active-result").first(), null != a ? this.result_do_highlight(a) : void 0 }, Chosen.prototype.no_results = function (b) { var c; return c = a('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), c.find("span").first().html(b), this.search_results.append(c), this.form_field_jq.trigger("chosen:no_results", { chosen: this }) }, Chosen.prototype.no_results_clear = function () { return this.search_results.find(".no-results").remove() }, Chosen.prototype.keydown_arrow = function () { var a; return this.results_showing && this.result_highlight ? (a = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(a) : void 0 : this.results_show() }, Chosen.prototype.keyup_arrow = function () { var a; return this.results_showing || this.is_multiple ? this.result_highlight ? (a = this.result_highlight.prevAll("li.active-result"), a.length ? this.result_do_highlight(a.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show() }, Chosen.prototype.keydown_backstroke = function () { var a; return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (a = this.search_container.siblings("li.search-choice").last(), a.length && !a.hasClass("search-choice-disabled") ? (this.pending_backstroke = a, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0) }, Chosen.prototype.clear_backstroke = function () { return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null }, Chosen.prototype.keydown_checker = function (a) { var b, c; switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), 8 !== b && this.pending_backstroke && this.clear_backstroke(), b) { case 8: this.backstroke_length = this.search_field.val().length; break; case 9: this.results_showing && !this.is_multiple && this.result_select(a), this.mouse_on_container = !1; break; case 13: a.preventDefault(); break; case 38: a.preventDefault(), this.keyup_arrow(); break; case 40: a.preventDefault(), this.keydown_arrow() } }, Chosen.prototype.search_field_scale = function () { var b, c, d, e, f, g, h, i, j; if (this.is_multiple) { for (d = 0, h = 0, f = "position:absolute; left: -1000px; top: -1000px; display:none;", g = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], i = 0, j = g.length; j > i; i++)e = g[i], f += e + ":" + this.search_field.css(e) + ";"; return b = a("<div />", { style: f }), b.text(this.search_field.val()), a("body").append(b), h = b.width() + 25, b.remove(), c = this.container.outerWidth(), h > c - 10 && (h = c - 10), this.search_field.css({ width: h + "px" }) } }, Chosen }(AbstractChosen) }.call(this);


// Chosen touch support.
if ($('.chosen-container').length > 0) {
    $('.chosen-container').on('touchstart', function (e) {
        e.stopPropagation(); e.preventDefault();
        // Trigger the mousedown event.
        $(this).trigger('mousedown');
    });
};
