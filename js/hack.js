var Milly = (function () {

    var init = function () {
        _bindEvents();
        _createStorageObj();
        _updateUI();
        _displayBadges();
    };

    var _createStorageObj = function () {
        var storageObj = localStorage.getItem('Milly');
        var schema = {};

        if (!storageObj) {
            var schema = {
                targetDist: 50,
                dist: 0,
                badges: []
            };

            localStorage.setItem('Milly', JSON.stringify(schema));
        }
    };

    var _saveData = function (data) {
        var storageObj = localStorage.getItem('Milly');
        var parsedObj = JSON.parse(storageObj);

        parsedObj.dist = parseFloat(parsedObj.dist) + parseFloat(data.distance);

        localStorage.setItem('Milly', JSON.stringify(parsedObj));

        _updateUI();
    };

    var _updateUI = function () {
        var storageObj = localStorage.getItem('Milly');

        if (storageObj) {
            var parsedObj = JSON.parse(storageObj);

            $('[data-target]').text(parsedObj.targetDist + 'km');
            $('[data-complete]').text(parsedObj.dist.toFixed(2) + 'km Completed');
            $('[data-remaining]').text( (parsedObj.targetDist - parsedObj.dist).toFixed(2) + 'km Remaining');

            var perc = ( (100/parsedObj.targetDist)*parsedObj.dist ).toFixed();
            $('[data-progress]')
                .css('width', perc + '%')
                .text(perc + '%');

            if (perc >= 100) {
                _goalComplete( parsedObj.targetDist.toFixed() );
            }
        }
        
    };

    var _displayBadges = function () {
        $('[data-badge-container]').empty()

        var storageObj = localStorage.getItem('Milly');

        if (storageObj) {
            var parsedObj = JSON.parse(storageObj);

            if (parsedObj.badges.length) {
                $.each(parsedObj.badges, function(i, v) {
                    var badge = $('<div>')
                        .addClass('label label-success')
                        .text(v)
                        .appendTo('[data-badge-container]');
                });
            }
        }
    };

    var _goalComplete = function (v) {
        var storageObj = localStorage.getItem('Milly');
        var parsedObj = JSON.parse(storageObj);

        parsedObj.dist = 0;
        parsedObj.badges.push(v);

        localStorage.setItem('Milly', JSON.stringify(parsedObj));

        _displayBadges();
        _updateUI();
    };

    var _handleSubmitEvent = function (form) {
        var $form = $(form);

        var formData = $form.serializeObject();

        _saveData(formData);

        $form[0].reset();
    };

    var _bindEvents = function () {
        $('body').on('submit.entry', '[data-submit]', function (e) {
            e.preventDefault();
            _handleSubmitEvent(this);
        });
    };

    // convert form data to object
    $.fn.serializeObject = function()
    {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    return {
        init: init
    };

})();

Milly.init();
