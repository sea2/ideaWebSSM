window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"JumpGamesPanel":"resource/eui_skins/otherGames/JumpGamesPanel.exml","OtherGameSkin":"resource/eui_skins/otherGames/OtherGameSkin.exml","RankPanel":"resource/eui_skins/rank/RankPanel.exml","TipsPanel":"resource/eui_skins/public/TipsPanel.exml","TipsItem":"resource/eui_skins/public/TipsItem.exml","GamePanel":"resource/eui_skins/uiSkin/GamePanel.exml","ResourceBtn":"resource/eui_skins/public/ResourceBtn.exml","BallVeiw":"resource/eui_skins/uiSkin/BallVeiw.exml","bloodSlider":"resource/eui_skins/public/bloodSlider.exml","StartPanel":"resource/eui_skins/uiSkin/StartPanel.exml","BattleModel":"resource/eui_skins/uiSkin/BattleModel.exml","PlayerListVeiw":"resource/eui_skins/uiSkin/PlayerListVeiw.exml","PlayerListItem":"resource/eui_skins/uiSkin/PlayerListItem.exml","PlayerModel":"resource/eui_skins/uiSkin/PlayerModel.exml","MagicListVeiw":"resource/eui_skins/uiSkin/MagicListVeiw.exml","MagicListItem":"resource/eui_skins/uiSkin/MagicListItem.exml","SkillListVeiw":"resource/eui_skins/uiSkin/SkillListVeiw.exml","SkillListItem":"resource/eui_skins/uiSkin/SkillListItem.exml","LiXianPanel":"resource/eui_skins/uiSkin/LiXianPanel.exml","SoundLuckBtn":"resource/eui_skins/SoundLuckBtn.exml","BallViewProgress":"resource/eui_skins/uiSkin/BallViewProgress.exml","ToggleBtnGroup":"resource/eui_skins/public/ToggleBtnGroup.exml","CollectListView":"resource/eui_skins/uiSkin/CollectListView.exml","CollectListItem":"resource/eui_skins/uiSkin/CollectListItem.exml","TreasureBox":"resource/eui_skins/public/TreasureBox.exml","BusinessmanPanel":"resource/eui_skins/public/BusinessmanPanel.exml","TreasureBoxResult":"resource/eui_skins/public/TreasureBoxResult.exml","button8":"resource/eui_skins/public/button8.exml","PlayerIntroducePanel":"resource/eui_skins/uiSkin/PlayerIntroducePanel.exml","PlayerIntroduceItem":"resource/eui_skins/uiSkin/PlayerIntroduceItem.exml","LoadingUI":"resource/eui_skins/loading/LoadingUI.exml","GoAnotherBall":"resource/eui_skins/public/GoAnotherBall.exml","PlusGoldPanel":"resource/eui_skins/uiSkin/PlusGoldPanel.exml","BreakThroughSuc":"resource/eui_skins/BreakThroughSuc.exml","loadingSlider":"resource/eui_skins/public/loadingSlider.exml","LuckyZhuanPan":"resource/eui_skins/uiSkin/LuckyZhuanPan.exml","ShareGetQuan":"resource/eui_skins/uiSkin/ShareGetQuan.exml","LuckyZhuanPanResult":"resource/eui_skins/uiSkin/LuckyZhuanPanResult.exml","InvitePanel":"resource/eui_skins/invite/InvitePanel.exml","InviteListItem":"resource/eui_skins/invite/InviteListItem.exml","NewLixianPanel":"resource/eui_skins/uiSkin/NewLixianPanel.exml","ShareNotice":"resource/eui_skins/ShareNotice.exml","GuidePanel":"resource/eui_skins/guide/GuidePanel.exml","HowToPlay":"resource/eui_skins/uiSkin/HowToPlay.exml","SevenDaySignPanel":"resource/eui_skins/uiSkin/SevenDaySignPanel.exml","SevenDaySignItem":"resource/eui_skins/uiSkin/SevenDaySignItem.exml","SevenSignButton":"resource/eui_skins/public/SevenSignButton.exml","HitHitPanel":"resource/eui_skins/uiSkin/HitHitPanel.exml","HitMostPanel":"resource/eui_skins/uiSkin/HitMostPanel.exml","PlayerHead":"resource/eui_skins/public/PlayerHead.exml","BallViewItem":"resource/eui_skins/uiSkin/BallViewItem.exml","UnlockPLayer":"resource/eui_skins/uiSkin/UnlockPLayer.exml","AddProgramIntroduce":"resource/eui_skins/AddProgramIntroduce.exml","VipPanel":"resource/eui_skins/uiSkin/VipPanel.exml","FocusGainPanel":"resource/eui_skins/FocusGainPanel.exml","OreItem":"resource/eui_skins/uiSkin/OreItem.exml","OrePanel":"resource/eui_skins/uiSkin/OrePanel.exml"};generateEUI.paths['resource/eui_skins/AddProgramIntroduce.exml'] = window.AddProgramIntroduceSkin = (function (_super) {
	__extends(AddProgramIntroduceSkin, _super);
	var AddProgramIntroduceSkin$Skin1 = 	(function (_super) {
		__extends(AddProgramIntroduceSkin$Skin1, _super);
		function AddProgramIntroduceSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AddProgramIntroduceSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AddProgramIntroduceSkin$Skin1;
	})(eui.Skin);

	function AddProgramIntroduceSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = AddProgramIntroduceSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 182;
		t.height = 738;
		t.horizontalCenter = 0;
		t.width = 552;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 738;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(48,38,6,14);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "backg_shoucang";
		t.verticalCenter = 56;
		t.width = 552;
		t.x = 0;
		t.y = 39;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 239;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(48,38,6,14);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_banner";
		t.verticalCenter = -155.5;
		t.width = 504;
		t.x = 24;
		t.y = 77;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(48,38,6,14);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_liuc";
		t.verticalCenter = 181;
		t.width = 502;
		t.x = 25;
		t.y = 333;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 510;
		t.y = 22;
		t.skinName = AddProgramIntroduceSkin$Skin1;
		return t;
	};
	return AddProgramIntroduceSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BreakThroughSuc.exml'] = window.BreakThroughSucSkin = (function (_super) {
	__extends(BreakThroughSucSkin, _super);
	var BreakThroughSucSkin$Skin2 = 	(function (_super) {
		__extends(BreakThroughSucSkin$Skin2, _super);
		function BreakThroughSucSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BreakThroughSucSkin$Skin2.prototype;

		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 22;
			t.textColor = 0xA59595;
			t.verticalCenter = -3;
			return t;
		};
		return BreakThroughSucSkin$Skin2;
	})(eui.Skin);

	var BreakThroughSucSkin$Skin3 = 	(function (_super) {
		__extends(BreakThroughSucSkin$Skin3, _super);
		function BreakThroughSucSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BreakThroughSucSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(20,0,0,79);
			t.source = "wddx_bt_007";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 30;
			t.textColor = 0x872011;
			t.verticalCenter = -3;
			return t;
		};
		return BreakThroughSucSkin$Skin3;
	})(eui.Skin);

	function BreakThroughSucSkin() {
		_super.call(this);
		this.skinParts = ["runBg","roleContainer","tishi","closeBtn","getBtn","player1","player2"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.runBg_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.roleContainer_i(),this.tishi_i(),this.closeBtn_i(),this.getBtn_i(),this.player1_i(),this.player2_i()];
	}
	var _proto = BreakThroughSucSkin.prototype;

	_proto.runBg_i = function () {
		var t = new eui.Image();
		this.runBg = t;
		t.anchorOffsetX = 381.5;
		t.anchorOffsetY = 332.5;
		t.horizontalCenter = 0.5;
		t.source = "wddx_light_001_png";
		t.verticalCenter = -103.5;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 101;
		t.anchorOffsetY = 101;
		t.height = 101;
		t.horizontalCenter = 0;
		t.source = "wddx_ft_003";
		t.verticalCenter = -380.5;
		t.width = 318;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 101;
		t.anchorOffsetY = 101;
		t.height = 22;
		t.horizontalCenter = 2.5;
		t.scaleX = -1;
		t.source = "wddx_bg_031";
		t.verticalCenter = -286;
		t.width = 37;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.horizontalCenter = 0.5;
		t.source = "wddx_bg_0018";
		t.verticalCenter = 122.5;
		t.width = 435;
		return t;
	};
	_proto.roleContainer_i = function () {
		var t = new eui.Group();
		this.roleContainer = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = -104;
		t.width = 200;
		return t;
	};
	_proto.tishi_i = function () {
		var t = new eui.Label();
		this.tishi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "ProBreakSuc_1";
		t.textColor = 0xffffff;
		t.verticalCenter = 120;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.height = 79;
		t.horizontalCenter = -11;
		t.label = "ProBreakSuc_2";
		t.verticalCenter = 267.5;
		t.width = 200;
		t.skinName = BreakThroughSucSkin$Skin2;
		return t;
	};
	_proto.getBtn_i = function () {
		var t = new MyButton();
		this.getBtn = t;
		t.height = 79;
		t.horizontalCenter = -11;
		t.label = "ProBreakSuc_3";
		t.verticalCenter = 212.5;
		t.width = 200;
		t.skinName = BreakThroughSucSkin$Skin3;
		return t;
	};
	_proto.player1_i = function () {
		var t = new PlayerHead();
		this.player1 = t;
		t.height = 20;
		t.width = 20;
		t.x = 239.64;
		t.y = 268.63;
		return t;
	};
	_proto.player2_i = function () {
		var t = new PlayerHead();
		this.player2 = t;
		t.height = 20;
		t.width = 20;
		t.x = 382.97;
		t.y = 268.63;
		return t;
	};
	return BreakThroughSucSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["image","labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this.image_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("image","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(44,31,5,3);
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 33;
		t.left = 62;
		t.right = 60;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 14;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.height = 35;
		t.horizontalCenter = 0;
		t.source = "WX_ddz_cj_05";
		t.verticalCenter = -10.5;
		t.width = 126;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/FocusGainPanel.exml'] = window.FocusGainPanelSkin = (function (_super) {
	__extends(FocusGainPanelSkin, _super);
	var FocusGainPanelSkin$Skin4 = 	(function (_super) {
		__extends(FocusGainPanelSkin$Skin4, _super);
		function FocusGainPanelSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FocusGainPanelSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_cloes";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return FocusGainPanelSkin$Skin4;
	})(eui.Skin);

	function FocusGainPanelSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","www_412","www_413","www_414","www_415","www_416","pro156","www_418","www_419","pro910","www_422"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = FocusGainPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.closeBtn_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this.www_412_i(),this.www_413_i(),this.www_414_i(),this._Image7_i(),this._Image8_i(),this.www_415_i(),this.www_416_i(),this._Image9_i(),this.pro156_i(),this.www_418_i(),this._Image10_i(),this._Image11_i(),this.www_419_i(),this.pro910_i(),this._Image12_i(),this._Image13_i(),this.www_422_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 730;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(31,31,2,0);
		t.source = "backg_tcbj";
		t.verticalCenter = 90;
		t.width = 550;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.label = "";
		t.x = 548;
		t.y = 260;
		t.skinName = FocusGainPanelSkin$Skin4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 97;
		t.horizontalCenter = 0;
		t.source = "img_tcbtdi";
		t.top = 240;
		t.width = 392;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 49;
		t.horizontalCenter = 2;
		t.source = "tcbt_gzhu";
		t.top = 250;
		t.width = 194;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 38;
		t.horizontalCenter = 0;
		t.source = "wenzi_gzgzh";
		t.top = 352;
		t.width = 298;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 77.33;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(33,27,5,4);
		t.source = "backg_neirdi";
		t.top = 404;
		t.width = 504;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43;
		t.horizontalCenter = -91;
		t.scale9Grid = new egret.Rectangle(33,27,5,4);
		t.source = "icon_sandian";
		t.top = 420;
		t.width = 72;
		return t;
	};
	_proto.www_412_i = function () {
		var t = new eui.Label();
		this.www_412 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.size = 24;
		t.text = "1.  ProFocusGain_1";
		t.textAlign = "left";
		t.textColor = 0x423f3f;
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 99.66;
		t.y = 415;
		return t;
	};
	_proto.www_413_i = function () {
		var t = new eui.Label();
		this.www_413 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.size = 24;
		t.text = "ProFocusGain_2";
		t.textAlign = "left";
		t.textColor = 0x423F3F;
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 279.99;
		t.y = 414;
		return t;
	};
	_proto.www_414_i = function () {
		var t = new eui.Label();
		this.www_414 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.size = 24;
		t.text = "ProFocusGain_3";
		t.textAlign = "left";
		t.textColor = 0x423F3F;
		t.verticalAlign = "middle";
		t.width = 172;
		t.x = 383.99;
		t.y = 414;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 77.33;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(33,27,5,4);
		t.source = "backg_neirdi";
		t.top = 497;
		t.width = 504;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.horizontalCenter = 41;
		t.scale9Grid = new egret.Rectangle(33,27,5,4);
		t.source = "icon_ddhezi";
		t.top = 501;
		t.width = 54;
		return t;
	};
	_proto.www_415_i = function () {
		var t = new eui.Label();
		this.www_415 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.size = 24;
		t.text = "2.  ProFocusGain_4";
		t.textAlign = "left";
		t.textColor = 0x423F3F;
		t.verticalAlign = "middle";
		t.width = 237;
		t.x = 99.66;
		t.y = 508;
		return t;
	};
	_proto.www_416_i = function () {
		var t = new eui.Label();
		this.www_416 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.size = 24;
		t.text = "ProFocusGain_5";
		t.textAlign = "left";
		t.textColor = 0x2e2e2e;
		t.verticalAlign = "middle";
		t.width = 172;
		t.x = 408.99;
		t.y = 508;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 77.33;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(33,27,5,4);
		t.source = "backg_neirdi";
		t.top = 589;
		t.width = 504;
		return t;
	};
	_proto.pro156_i = function () {
		var t = new eui.Label();
		this.pro156 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.size = 24;
		t.text = "3.  ProFocusGain_1 \"ProFocusGain_5\" ProFocusGain_6";
		t.textAlign = "left";
		t.textColor = 0x423F3F;
		t.verticalAlign = "middle";
		t.width = 327;
		t.x = 99.66;
		t.y = 601;
		return t;
	};
	_proto.www_418_i = function () {
		var t = new eui.Label();
		this.www_418 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.size = 24;
		t.text = "ProFocusGain_7";
		t.textAlign = "left";
		t.textColor = 0x2E2E2E;
		t.verticalAlign = "middle";
		t.width = 172;
		t.x = 408.99;
		t.y = 601;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 305.33;
		t.horizontalCenter = -110;
		t.scale9Grid = new egret.Rectangle(33,27,5,4);
		t.source = "backg_neirdi";
		t.top = 681;
		t.width = 284;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 173;
		t.horizontalCenter = -109.5;
		t.scale9Grid = new egret.Rectangle(33,27,5,4);
		t.source = "img_gghao";
		t.top = 786;
		t.width = 153;
		return t;
	};
	_proto.www_419_i = function () {
		var t = new eui.Label();
		this.www_419 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.size = 24;
		t.text = "4.  ProFocusGain_8";
		t.textAlign = "left";
		t.textColor = 0x2E2E2E;
		t.verticalAlign = "middle";
		t.width = 172;
		t.x = 130.99;
		t.y = 688;
		return t;
	};
	_proto.pro910_i = function () {
		var t = new eui.Label();
		this.pro910 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 69;
		t.size = 24;
		t.text = "ProFocusGain_9\n(ProFocusGain_10)";
		t.textAlign = "center";
		t.textColor = 0x423F3F;
		t.verticalAlign = "middle";
		t.width = 327;
		t.x = 45.66;
		t.y = 720;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 302;
		t.horizontalCenter = 150;
		t.scale9Grid = new egret.Rectangle(33,27,5,4);
		t.source = "jiangli_zuans";
		t.top = 681;
		t.width = 200;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.horizontalCenter = 151;
		t.scale9Grid = new egret.Rectangle(33,27,5,4);
		t.source = "buttom_linquh";
		t.top = 903;
		t.visible = false;
		t.width = 140;
		return t;
	};
	_proto.www_422_i = function () {
		var t = new eui.Label();
		this.www_422 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.size = 26;
		t.text = "+666ProFocusGain_11";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 173;
		t.x = 382.66;
		t.y = 699;
		return t;
	};
	return FocusGainPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/guide/GuidePanel.exml'] = window.GuidePanelSkin = (function (_super) {
	__extends(GuidePanelSkin, _super);
	var GuidePanelSkin$Skin5 = 	(function (_super) {
		__extends(GuidePanelSkin$Skin5, _super);
		function GuidePanelSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GuidePanelSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(15,36,11,6);
			t.source = "wddx_bt_007";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = -70;
			t.source = "wddx_ic_030";
			t.verticalCenter = -3;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 7;
			t.size = 30;
			t.verticalCenter = -4;
			return t;
		};
		return GuidePanelSkin$Skin5;
	})(eui.Skin);

	function GuidePanelSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.closeBtn_i()];
	}
	var _proto = GuidePanelSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.4;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 0;
		t.bottom = 906;
		t.horizontalCenter = 223;
		t.label = "ProGuide_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 180;
		t.skinName = GuidePanelSkin$Skin5;
		return t;
	};
	return GuidePanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/invite/InviteListItem.exml'] = window.InviteListItemSkin = (function (_super) {
	__extends(InviteListItemSkin, _super);
	var InviteListItemSkin$Skin6 = 	(function (_super) {
		__extends(InviteListItemSkin$Skin6, _super);
		function InviteListItemSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InviteListItemSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(20,0,0,111);
			t.source = "wddx_bt_009";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.textColor = 0xA22C11;
			t.verticalCenter = 0;
			return t;
		};
		return InviteListItemSkin$Skin6;
	})(eui.Skin);

	function InviteListItemSkin() {
		_super.call(this);
		this.skinParts = ["addImage","www_139","icon","logo","tipsLabel","getBtn"];
		
		this.height = 98;
		this.width = 500;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = InviteListItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 98;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.addImage_i(),this.www_139_i(),this.icon_i(),this.logo_i(),this.tipsLabel_i(),this.getBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 98;
		t.scale9Grid = new egret.Rectangle(17,17,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_004";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.scale9Grid = new egret.Rectangle(17,17,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_020";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 11;
		t.y = 9;
		return t;
	};
	_proto.addImage_i = function () {
		var t = new eui.Image();
		this.addImage = t;
		t.height = 49;
		t.left = 27;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_035";
		t.verticalCenter = 0.5;
		t.width = 49;
		t.x = 27;
		t.y = 25;
		return t;
	};
	_proto.www_139_i = function () {
		var t = new eui.Label();
		this.www_139 = t;
		t.anchorOffsetX = 0;
		t.bottom = 16;
		t.fontFamily = "Microsoft YaHei";
		t.left = 11;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "ProInvite_1";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 80;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.height = 75;
		t.scale9Grid = new egret.Rectangle(17,17,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0.5;
		t.width = 75;
		t.x = 13;
		t.y = 12;
		return t;
	};
	_proto.logo_i = function () {
		var t = new eui.Image();
		this.logo = t;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_017";
		t.verticalCenter = 1;
		t.width = 40;
		t.x = 98;
		t.y = 22;
		return t;
	};
	_proto.tipsLabel_i = function () {
		var t = new eui.Label();
		this.tipsLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "ProInvite_2";
		t.textAlign = "left";
		t.textColor = 0x747474;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 242.76;
		t.x = 145.39;
		return t;
	};
	_proto.getBtn_i = function () {
		var t = new MyButton();
		this.getBtn = t;
		t.height = 61;
		t.label = "ProInvite_3";
		t.right = 9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 1.5;
		t.width = 97.2;
		t.x = 417.8;
		t.y = 20;
		t.skinName = InviteListItemSkin$Skin6;
		return t;
	};
	return InviteListItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/invite/InviteToggleGroup.exml'] = window.InviteToggleGroup = (function (_super) {
	__extends(InviteToggleGroup, _super);
	var InviteToggleGroup$Skin7 = 	(function (_super) {
		__extends(InviteToggleGroup$Skin7, _super);
		function InviteToggleGroup$Skin7() {
			_super.call(this);
			this.skinParts = ["selectDisplay","iconDisplay","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.selectDisplay_i(),this.iconDisplay_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InviteToggleGroup$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 90;
			t.source = "wddx_bt_031";
			t.percentWidth = 100;
			t.x = 0;
			t.y = 2;
			return t;
		};
		_proto.selectDisplay_i = function () {
			var t = new eui.Image();
			this.selectDisplay = t;
			t.percentHeight = 100;
			t.source = "wddx_bt_030";
			t.percentWidth = 100;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.height = 67;
			t.horizontalCenter = -34;
			t.scaleX = 0.4;
			t.scaleY = 0.4;
			t.source = "wddx_ic_017";
			t.verticalCenter = 0;
			t.width = 63;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 24;
			t.text = "ProInvite_17";
			t.verticalCenter = -1;
			t.x = 53;
			return t;
		};
		return InviteToggleGroup$Skin7;
	})(eui.Skin);

	var InviteToggleGroup$Skin8 = 	(function (_super) {
		__extends(InviteToggleGroup$Skin8, _super);
		function InviteToggleGroup$Skin8() {
			_super.call(this);
			this.skinParts = ["selectDisplay","iconDisplay","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.selectDisplay_i(),this.iconDisplay_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InviteToggleGroup$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 90;
			t.source = "wddx_bt_031";
			t.percentWidth = 100;
			t.x = 0;
			t.y = 2;
			return t;
		};
		_proto.selectDisplay_i = function () {
			var t = new eui.Image();
			this.selectDisplay = t;
			t.percentHeight = 100;
			t.source = "wddx_bt_030";
			t.percentWidth = 100;
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.height = 67;
			t.horizontalCenter = -34;
			t.scaleX = 0.4;
			t.scaleY = 0.4;
			t.source = "wddx_ic_017";
			t.verticalCenter = 0;
			t.width = 63;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.size = 24;
			t.text = "ProInvite_19";
			t.verticalCenter = -1;
			t.x = 53;
			return t;
		};
		return InviteToggleGroup$Skin8;
	})(eui.Skin);

	function InviteToggleGroup() {
		_super.call(this);
		this.skinParts = ["btnGroup","redPointGroup"];
		
		this.height = 54;
		this.width = 330;
		this.elementsContent = [this.btnGroup_i(),this.redPointGroup_i()];
	}
	var _proto = InviteToggleGroup.prototype;

	_proto.btnGroup_i = function () {
		var t = new eui.Group();
		this.btnGroup = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._ToggleBtn1_i(),this._ToggleBtn2_i()];
		return t;
	};
	_proto._ToggleBtn1_i = function () {
		var t = new ToggleBtn();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.icon = "wddx_ic_017";
		t.isScale = false;
		t.label = "ProInvite_16";
		t.scaleX = 1;
		t.scaleY = 1;
		t.selectColor = 0xffffff;
		t.unselectColor = 0xa22c11;
		t.width = 124;
		t.y = 0;
		t.skinName = InviteToggleGroup$Skin7;
		return t;
	};
	_proto._ToggleBtn2_i = function () {
		var t = new ToggleBtn();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.icon = "wddx_ic_016";
		t.isScale = false;
		t.label = "ProInvite_18";
		t.scaleX = 1;
		t.scaleY = 1;
		t.selectColor = 0xffffff;
		t.unselectColor = 0xa22c11;
		t.width = 124;
		t.x = 136;
		t.y = 0;
		t.skinName = InviteToggleGroup$Skin8;
		return t;
	};
	_proto.redPointGroup_i = function () {
		var t = new eui.Group();
		this.redPointGroup = t;
		t.height = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.layout = this._BasicLayout1_i();
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	return InviteToggleGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/invite/InvitePanel.exml'] = window.InvitePanelSkin = (function (_super) {
	__extends(InvitePanelSkin, _super);
	var InvitePanelSkin$Skin9 = 	(function (_super) {
		__extends(InvitePanelSkin$Skin9, _super);
		function InvitePanelSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InvitePanelSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wddx_bt_005";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InvitePanelSkin$Skin9;
	})(eui.Skin);

	function InvitePanelSkin() {
		_super.call(this);
		this.skinParts = ["www_151","www_152","constainer","closeBtn","toggleGroup","aniAdCon"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = InvitePanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 226;
		t.height = 866;
		t.horizontalCenter = 0;
		t.width = 560;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.www_151_i(),this.www_152_i(),this._Scroller1_i(),this.closeBtn_i(),this.toggleGroup_i(),this.aniAdCon_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 820;
		t.scale9Grid = new egret.Rectangle(184,76,1,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0012";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 30;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 64;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(45,0,0,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0014";
		t.width = 275;
		t.y = 45.4;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 620;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(19,16,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0013";
		t.verticalCenter = 57;
		t.width = 524;
		return t;
	};
	_proto.www_151_i = function () {
		var t = new eui.Label();
		this.www_151 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "ProInvite_13";
		t.textAlign = "center";
		t.width = 200;
		t.y = 60.08;
		return t;
	};
	_proto.www_152_i = function () {
		var t = new eui.Label();
		this.www_152 = t;
		t.anchorOffsetX = 0;
		t.bottom = 32;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "ProInvite_14";
		t.textAlign = "center";
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 602;
		t.horizontalCenter = 0;
		t.width = 510;
		t.y = 188;
		t.viewport = this.constainer_i();
		return t;
	};
	_proto.constainer_i = function () {
		var t = new eui.Group();
		this.constainer = t;
		t.width = 510;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.paddingTop = 4;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.label = "";
		t.x = 498;
		t.y = 39;
		t.skinName = InvitePanelSkin$Skin9;
		return t;
	};
	_proto.toggleGroup_i = function () {
		var t = new ToggleBtnGroup();
		this.toggleGroup = t;
		t.height = 49;
		t.horizontalCenter = -101;
		t.skinName = "InviteToggleGroup";
		t.width = 300;
		t.y = 136.5;
		return t;
	};
	_proto.aniAdCon_i = function () {
		var t = new eui.Group();
		this.aniAdCon = t;
		t.height = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 100;
		return t;
	};
	return InvitePanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/invite/InviteToggleBtn.exml'] = window.InviteToggleBtn = (function (_super) {
	__extends(InviteToggleBtn, _super);
	function InviteToggleBtn() {
		_super.call(this);
		this.skinParts = ["selectDisplay","iconDisplay","labelDisplay"];
		
		this.height = 54;
		this.width = 117;
		this.elementsContent = [this._Image1_i(),this.selectDisplay_i(),this.iconDisplay_i(),this.labelDisplay_i()];
	}
	var _proto = InviteToggleBtn.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 90;
		t.source = "wddx_bt_031";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.selectDisplay_i = function () {
		var t = new eui.Image();
		this.selectDisplay = t;
		t.percentHeight = 100;
		t.source = "wddx_bt_030";
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.height = 67;
		t.horizontalCenter = -34;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "wddx_ic_017";
		t.verticalCenter = 0;
		t.width = 63;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "ProInvite_15";
		t.verticalCenter = -1;
		t.x = 53;
		return t;
	};
	return InviteToggleBtn;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/loadingSlider.exml'] = window.loadingSliderSkin = (function (_super) {
	__extends(loadingSliderSkin, _super);
	function loadingSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","trackHighlight","thumb"];
		
		this.height = 20;
		this.width = 325;
		this.elementsContent = [this._Image1_i(),this.track_i(),this.trackHighlight_i(),this.thumb_i()];
	}
	var _proto = loadingSliderSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(16,10,0,0);
		t.source = "jindutiao";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.track_i = function () {
		var t = new eui.Group();
		this.track = t;
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.horizontalCenter = -0.5;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.trackHighlight_i = function () {
		var t = new eui.Image();
		this.trackHighlight = t;
		t.fillMode = "repeat";
		t.percentHeight = 100;
		t.left = 0;
		t.source = "jindutiao1";
		t.verticalCenter = 0;
		t.width = 302;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Group();
		this.thumb = t;
		t.percentHeight = 70;
		t.width = 1;
		t.x = 8.6;
		t.y = 3;
		return t;
	};
	return loadingSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/loading/LoadingUI.exml'] = window.LoadingUISkin = (function (_super) {
	__extends(LoadingUISkin, _super);
	function LoadingUISkin() {
		_super.call(this);
		this.skinParts = ["slider","www_1","tipsLabel","container"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.container_i()];
	}
	var _proto = LoadingUISkin.prototype;

	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.slider_i(),this.www_1_i(),this.tipsLabel_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "wddx_bg_024";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 204;
		t.horizontalCenter = 0.5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "logo_png";
		t.verticalCenter = -398;
		t.width = 361;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 18;
		t.horizontalCenter = 14;
		t.source = "wddx_bg_025";
		t.verticalCenter = -53;
		t.width = 160;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 202;
		t.horizontalCenter = 0.5;
		t.source = "wddx_role_genren";
		t.verticalCenter = -153;
		t.width = 151;
		return t;
	};
	_proto.slider_i = function () {
		var t = new eui.HSlider();
		this.slider = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 233;
		t.height = 20;
		t.horizontalCenter = 0;
		t.skinName = "loadingSliderSkin";
		t.width = 325;
		return t;
	};
	_proto.www_1_i = function () {
		var t = new eui.Label();
		this.www_1 = t;
		t.bottom = 206;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "Load_1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 200;
		return t;
	};
	_proto.tipsLabel_i = function () {
		var t = new eui.Label();
		this.tipsLabel = t;
		t.bottom = 326;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	return LoadingUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/otherGames/JumpGamesPanel.exml'] = window.JumpGamesPanelSkin = (function (_super) {
	__extends(JumpGamesPanelSkin, _super);
	var JumpGamesPanelSkin$Skin10 = 	(function (_super) {
		__extends(JumpGamesPanelSkin$Skin10, _super);
		function JumpGamesPanelSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JumpGamesPanelSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "chou_chu";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "chou_jin";
			t.visible = false;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JumpGamesPanelSkin$Skin10;
	})(eui.Skin);

	function JumpGamesPanelSkin() {
		_super.call(this);
		this.skinParts = ["bg_close","jumpGamesBtn","jumpContainer","jumpgames"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.bg_close_i(),this.jumpgames_i()];
	}
	var _proto = JumpGamesPanelSkin.prototype;

	_proto.bg_close_i = function () {
		var t = new eui.Image();
		this.bg_close = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.jumpgames_i = function () {
		var t = new eui.Group();
		this.jumpgames = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 618;
		t.top = 283;
		t.width = 348;
		t.x = -348;
		t.elementsContent = [this._Image1_i(),this.jumpGamesBtn_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(15,16,2,2);
		t.source = "wddx_bg_028";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jumpGamesBtn_i = function () {
		var t = new MyButton();
		this.jumpGamesBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 89;
		t.label = "";
		t.width = 76;
		t.x = 346.01;
		t.y = 35.21;
		t.skinName = JumpGamesPanelSkin$Skin10;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 564;
		t.horizontalCenter = 0;
		t.width = 310;
		t.y = 30;
		t.viewport = this.jumpContainer_i();
		return t;
	};
	_proto.jumpContainer_i = function () {
		var t = new eui.Group();
		this.jumpContainer = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	return JumpGamesPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/otherGames/OtherGameSkin.exml'] = window.OtherGameSkinSkin = (function (_super) {
	__extends(OtherGameSkinSkin, _super);
	var OtherGameSkinSkin$Skin11 = 	(function (_super) {
		__extends(OtherGameSkinSkin$Skin11, _super);
		function OtherGameSkinSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["icon","labelDisplay"];
			
			this.elementsContent = [this.icon_i(),this.labelDisplay_i(),this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OtherGameSkinSkin$Skin11.prototype;

		_proto.icon_i = function () {
			var t = new eui.Image();
			this.icon = t;
			t.percentHeight = 100;
			t.source = "";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 20;
			t.textColor = 0xffffff;
			t.verticalCenter = 58;
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 15;
			t.horizontalCenter = 33;
			t.source = "";
			t.verticalCenter = -33;
			t.width = 15;
			return t;
		};
		return OtherGameSkinSkin$Skin11;
	})(eui.Skin);

	function OtherGameSkinSkin() {
		_super.call(this);
		this.skinParts = ["jumpBtn"];
		
		this.height = 110;
		this.width = 80;
		this.elementsContent = [this.jumpBtn_i()];
	}
	var _proto = OtherGameSkinSkin.prototype;

	_proto.jumpBtn_i = function () {
		var t = new MyButton();
		this.jumpBtn = t;
		t.height = 75;
		t.horizontalCenter = 0.5;
		t.icon = "";
		t.label = "";
		t.top = 4;
		t.width = 75;
		t.skinName = OtherGameSkinSkin$Skin11;
		return t;
	};
	return OtherGameSkinSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/bloodSlider.exml'] = window.bloodSliderSkin = (function (_super) {
	__extends(bloodSliderSkin, _super);
	function bloodSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","trackHighlight","thumb"];
		
		this.height = 18.83;
		this.width = 335.5;
		this.elementsContent = [this._Image1_i(),this.track_i(),this.trackHighlight_i(),this.thumb_i()];
	}
	var _proto = bloodSliderSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(16,10,0,0);
		t.source = "wddx_line_001";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.track_i = function () {
		var t = new eui.Group();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0.08500000000000085;
		t.percentWidth = 96;
		return t;
	};
	_proto.trackHighlight_i = function () {
		var t = new eui.Image();
		this.trackHighlight = t;
		t.percentHeight = 80;
		t.left = 8;
		t.scale9Grid = new egret.Rectangle(14,0,0,18);
		t.source = "wddx_line_002";
		t.verticalCenter = 0.08500000000000085;
		t.width = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.alpha = 0;
		t.percentHeight = 70;
		t.source = "wddx_line_002";
		t.verticalCenter = 0.08500000000000085;
		t.width = 1;
		t.x = 8.6;
		return t;
	};
	return bloodSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/button3.exml'] = window.button3Skin = (function (_super) {
	__extends(button3Skin, _super);
	function button3Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 55;
		this.width = 120;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
	}
	var _proto = button3Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(19,0,0,55);
		t.source = "wddx_bt_001";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "ProButton_2 MAX";
		t.textColor = 0xa22c11;
		t.verticalCenter = -1.5;
		return t;
	};
	return button3Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/BusinessmanPanel.exml'] = window.BusinessmanPanelSkin = (function (_super) {
	__extends(BusinessmanPanelSkin, _super);
	var BusinessmanPanelSkin$Skin12 = 	(function (_super) {
		__extends(BusinessmanPanelSkin$Skin12, _super);
		function BusinessmanPanelSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BusinessmanPanelSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(19,9,0,61);
			t.source = "wddx_bt_007";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = -1.5;
			t.size = 32;
			t.text = "";
			t.verticalCenter = -5;
			return t;
		};
		return BusinessmanPanelSkin$Skin12;
	})(eui.Skin);

	var BusinessmanPanelSkin$Skin13 = 	(function (_super) {
		__extends(BusinessmanPanelSkin$Skin13, _super);
		function BusinessmanPanelSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BusinessmanPanelSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wddx_bt_005";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BusinessmanPanelSkin$Skin13;
	})(eui.Skin);

	function BusinessmanPanelSkin() {
		_super.call(this);
		this.skinParts = ["www_158","title2","title1","www_161","timeText","scGroup1","scGroup2","scGroup3","scGroup4","huishouJiangliGroup","www_162","xhzsCount","refreshBtn","refreshGroup","getBtn","www_165","noTxt","noBusinessman","aniAdCon0","aniAdCon1","closeBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group2_i(),this.closeBtn_i()];
	}
	var _proto = BusinessmanPanelSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 249;
		t.height = 800;
		t.horizontalCenter = 0;
		t.width = 568.18;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.www_158_i(),this.title2_i(),this.title1_i(),this.www_161_i(),this.timeText_i(),this._Group1_i(),this.huishouJiangliGroup_i(),this.refreshGroup_i(),this.getBtn_i(),this.noBusinessman_i(),this.aniAdCon0_i(),this.aniAdCon1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 758;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(184,69,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0012";
		t.width = 560;
		t.x = -2;
		t.y = -4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(45,0,0,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0014";
		t.width = 274;
		t.x = 141;
		t.y = 5.8300000000000125;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0.410000000000025;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_018_png";
		t.verticalCenter = -189.5;
		t.x = 61;
		t.y = 313;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 250;
		t.horizontalCenter = -0.08999999999997499;
		t.scale9Grid = new egret.Rectangle(19,16,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0013";
		t.width = 524;
		t.x = 16;
		t.y = 338.12;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 3;
		t.source = "wddx_bg_0011";
		t.width = 524;
		t.x = 22.08;
		t.y = 418.1;
		return t;
	};
	_proto.www_158_i = function () {
		var t = new eui.Label();
		this.www_158 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 27.03;
		t.right = 40.17999999999995;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "ShangRen_1:";
		t.textAlign = "center";
		t.textColor = 0x67ff72;
		t.width = 135.24;
		t.x = 373.76000000000005;
		t.y = 440.82;
		return t;
	};
	_proto.title2_i = function () {
		var t = new eui.Label();
		this.title2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -0.08999999999997499;
		t.lineSpacing = 6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "ShangRen_2！";
		t.textAlign = "center";
		t.x = 88;
		t.y = 355.06;
		return t;
	};
	_proto.title1_i = function () {
		var t = new eui.Label();
		this.title1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "ShangRen_3";
		t.x = 206;
		t.y = 18.670000000000016;
		return t;
	};
	_proto.www_161_i = function () {
		var t = new eui.Label();
		this.www_161 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -50.589999999999975;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "ShangRen_4: ";
		t.textColor = 0x67FF72;
		t.verticalCenter = -316;
		t.visible = false;
		t.x = 184;
		t.y = 318;
		return t;
	};
	_proto.timeText_i = function () {
		var t = new eui.Label();
		this.timeText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 75.41000000000003;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "00:00:00";
		t.textColor = 0x67ff72;
		t.verticalCenter = -316;
		t.visible = false;
		t.width = 161;
		t.x = 273;
		t.y = 318;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.18;
		t.horizontalCenter = -88.08999999999997;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 112;
		t.width = 318.18;
		t.x = 31;
		t.y = 472.0000000000001;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.scGroup1_i(),this.scGroup2_i(),this.scGroup3_i(),this.scGroup4_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 7;
		t.paddingLeft = 10;
		return t;
	};
	_proto.scGroup1_i = function () {
		var t = new eui.Group();
		this.scGroup1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 70;
		t.x = 2.31;
		t.y = 0.62;
		t.elementsContent = [this._Image6_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 27;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "";
		t.textAlign = "center";
		return t;
	};
	_proto.scGroup2_i = function () {
		var t = new eui.Group();
		this.scGroup2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 70;
		t.x = 12.31;
		t.y = 10.62;
		t.elementsContent = [this._Image7_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bottom = 27;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "";
		t.textAlign = "center";
		return t;
	};
	_proto.scGroup3_i = function () {
		var t = new eui.Group();
		this.scGroup3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 70;
		t.x = 22.310000000000002;
		t.y = 20.619999999999997;
		t.elementsContent = [this._Image8_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bottom = 27;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "";
		t.textAlign = "center";
		return t;
	};
	_proto.scGroup4_i = function () {
		var t = new eui.Group();
		this.scGroup4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 70;
		t.x = 32.31;
		t.y = 30.619999999999997;
		t.elementsContent = [this._Image9_i(),this._Label7_i(),this._Label8_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bottom = 27;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "";
		t.textAlign = "center";
		return t;
	};
	_proto.huishouJiangliGroup_i = function () {
		var t = new eui.Group();
		this.huishouJiangliGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130;
		t.horizontalCenter = 177.91000000000003;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 111;
		t.width = 162;
		t.x = 368.00000000000006;
		t.y = 465.0000000000001;
		t.elementsContent = [this._Image10_i(),this._Label9_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 33;
		t.width = 70;
		t.y = -599.38;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	_proto.refreshGroup_i = function () {
		var t = new eui.Group();
		this.refreshGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130.3;
		t.width = 301.52;
		t.x = 26;
		t.y = 601.16;
		t.elementsContent = [this.www_162_i(),this._Image11_i(),this._Image12_i(),this.xhzsCount_i(),this.refreshBtn_i()];
		return t;
	};
	_proto.www_162_i = function () {
		var t = new eui.Label();
		this.www_162 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.2400000000000091;
		t.size = 20;
		t.text = "ShangRen_5";
		t.top = 16;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.scale9Grid = new egret.Rectangle(19,17,0,0);
		t.source = "wddx_bg_0013";
		t.width = 270;
		t.x = 16;
		t.y = 43;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.source = "wddx_ic_016";
		t.verticalCenter = 15.849999999999994;
		t.width = 36;
		t.x = 32;
		return t;
	};
	_proto.xhzsCount_i = function () {
		var t = new eui.Label();
		this.xhzsCount = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "x5";
		t.x = 76.44;
		t.y = 67;
		return t;
	};
	_proto.refreshBtn_i = function () {
		var t = new MyButton();
		this.refreshBtn = t;
		t.anchorOffsetX = 0;
		t.label = "ShangRen_6";
		t.skinName = "button3Skin";
		t.width = 79;
		t.x = 192;
		t.y = 56;
		return t;
	};
	_proto.getBtn_i = function () {
		var t = new MyButton();
		this.getBtn = t;
		t.anchorOffsetX = 0;
		t.label = "ShangRen_7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 182;
		t.x = 348;
		t.y = 645.1;
		t.skinName = BusinessmanPanelSkin$Skin12;
		return t;
	};
	_proto.noBusinessman_i = function () {
		var t = new eui.Group();
		this.noBusinessman = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 66;
		t.height = 130;
		t.horizontalCenter = -0.08999999999997499;
		t.visible = false;
		t.width = 530;
		t.elementsContent = [this._Image13_i(),this.www_165_i(),this.noTxt_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(19,17,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0013";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.www_165_i = function () {
		var t = new eui.Label();
		this.www_165 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "ShangRen_8：";
		t.textAlign = "center";
		t.textColor = 0x67ff72;
		t.width = 190.67;
		t.y = 13;
		return t;
	};
	_proto.noTxt_i = function () {
		var t = new eui.Label();
		this.noTxt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 49.7;
		t.horizontalCenter = 0;
		t.lineSpacing = 6;
		t.rotation = 359.94;
		t.size = 20;
		t.text = "ShangRen_9";
		t.textAlign = "center";
		t.width = 449.78;
		t.y = 57.8;
		return t;
	};
	_proto.aniAdCon0_i = function () {
		var t = new eui.Group();
		this.aniAdCon0 = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = -16;
		t.y = 163;
		return t;
	};
	_proto.aniAdCon1_i = function () {
		var t = new eui.Group();
		this.aniAdCon1 = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 480;
		t.y = 163;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.bottom = 958;
		t.height = 86;
		t.label = "";
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = BusinessmanPanelSkin$Skin13;
		return t;
	};
	return BusinessmanPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/button1.exml'] = window.button1Skin = (function (_super) {
	__extends(button1Skin, _super);
	function button1Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 110;
		this.width = 104;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = button1Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "wddx_bt_004";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return button1Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/button2.exml'] = window.button2Skin = (function (_super) {
	__extends(button2Skin, _super);
	function button2Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 111;
		this.width = 106;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
	}
	var _proto = button2Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "wddx_bt_012";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 27;
		t.size = 24;
		t.text = "ProButton_1";
		t.top = 38;
		return t;
	};
	return button2Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/button4.exml'] = window.button4Skin = (function (_super) {
	__extends(button4Skin, _super);
	function button4Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 237;
		this.width = 196;
		this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
	}
	var _proto = button4Skin.prototype;

	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "wddx_ic_004";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 7;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 1;
		t.text = "Label";
		return t;
	};
	return button4Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/button5.exml'] = window.button5Skin = (function (_super) {
	__extends(button5Skin, _super);
	function button5Skin() {
		_super.call(this);
		this.skinParts = ["iconbg","costbg","iconlogo","tips1","tips","cost","tips0"];
		
		this.height = 116;
		this.width = 190;
		this.elementsContent = [this.iconbg_i(),this.costbg_i(),this.iconlogo_i(),this.tips1_i(),this.tips_i(),this.cost_i(),this.tips0_i()];
	}
	var _proto = button5Skin.prototype;

	_proto.iconbg_i = function () {
		var t = new eui.Image();
		this.iconbg = t;
		t.percentHeight = 100;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(20,0,0,79);
		t.source = "wddx_bt_002";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.costbg_i = function () {
		var t = new eui.Image();
		this.costbg = t;
		t.bottom = 16;
		t.height = 30;
		t.horizontalCenter = 7;
		t.scale9Grid = new egret.Rectangle(20,0,0,31);
		t.source = "wddx_bg_007";
		t.width = 130;
		return t;
	};
	_proto.iconlogo_i = function () {
		var t = new eui.Image();
		this.iconlogo = t;
		t.bottom = 16;
		t.height = 30;
		t.horizontalCenter = -56;
		t.source = "wddx_ic_004";
		t.width = 30;
		return t;
	};
	_proto.tips1_i = function () {
		var t = new eui.Label();
		this.tips1 = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "ProButton_3";
		t.textAlign = "center";
		t.textColor = 0x41680F;
		t.verticalAlign = "middle";
		t.verticalCenter = -37.5;
		t.percentWidth = 100;
		return t;
	};
	_proto.tips_i = function () {
		var t = new eui.Label();
		this.tips = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "+99999999ProButton_4";
		t.textAlign = "center";
		t.textColor = 0x41680f;
		t.verticalAlign = "middle";
		t.verticalCenter = -10.5;
		t.percentWidth = 100;
		return t;
	};
	_proto.cost_i = function () {
		var t = new eui.Label();
		this.cost = t;
		t.bottom = 22;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 13;
		t.size = 18;
		t.text = "9999999";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto.tips0_i = function () {
		var t = new eui.Label();
		this.tips0 = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "ProButton_5";
		t.textAlign = "center";
		t.textColor = 0x872011;
		t.verticalAlign = "middle";
		t.verticalCenter = -24.5;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	return button5Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/button6.exml'] = window.button6Skin = (function (_super) {
	__extends(button6Skin, _super);
	function button6Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 58;
		this.width = 124;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i()];
	}
	var _proto = button6Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(18,0,2,58);
		t.source = "wddx_bt_003";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 22;
		t.horizontalCenter = -33;
		t.source = "wddx_ic_014";
		t.verticalCenter = -3;
		t.width = 24;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 13;
		t.size = 20;
		t.text = "ProButton_6";
		t.textColor = 0x41680f;
		t.verticalCenter = -4;
		return t;
	};
	return button6Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/button7.exml'] = window.button7Skin = (function (_super) {
	__extends(button7Skin, _super);
	function button7Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 58;
		this.width = 124;
		this.elementsContent = [this._Image1_i(),this.iconDisplay_i(),this.labelDisplay_i()];
	}
	var _proto = button7Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(18,0,2,58);
		t.source = "wddx_bt_003";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.height = 24;
		t.horizontalCenter = -41;
		t.source = "wddx_ic_013";
		t.verticalCenter = -3;
		t.width = 30;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 15;
		t.size = 20;
		t.text = "ProButton_7";
		t.textColor = 0x41680f;
		t.verticalCenter = -4;
		return t;
	};
	return button7Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/button8.exml'] = window.button8Skin = (function (_super) {
	__extends(button8Skin, _super);
	function button8Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
	}
	var _proto = button8Skin.prototype;

	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 113;
		t.horizontalCenter = 0;
		t.source = "wddx_bt_015";
		t.verticalCenter = -30;
		t.width = 83;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 2;
		t.text = "ProButton_8";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 26;
		t.width = 150;
		return t;
	};
	return button8Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/GoAnotherBall.exml'] = window.GoAnotherBallSkin = (function (_super) {
	__extends(GoAnotherBallSkin, _super);
	var GoAnotherBallSkin$Skin14 = 	(function (_super) {
		__extends(GoAnotherBallSkin$Skin14, _super);
		function GoAnotherBallSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GoAnotherBallSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(18,24,2,2);
			t.source = "wddx_bt_003";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 40;
			t.stroke = 1;
			t.verticalCenter = 0;
			return t;
		};
		return GoAnotherBallSkin$Skin14;
	})(eui.Skin);

	function GoAnotherBallSkin() {
		_super.call(this);
		this.skinParts = ["bg","title","ballImg","goBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this.title_i(),this.ballImg_i(),this.goBtn_i()];
	}
	var _proto = GoAnotherBallSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 44;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "AnotherBall_1！";
		t.textAlign = "center";
		t.verticalCenter = -456;
		t.width = 640;
		return t;
	};
	_proto.ballImg_i = function () {
		var t = new eui.Image();
		this.ballImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 350;
		t.horizontalCenter = -5;
		t.source = "wddx_ic_019";
		t.verticalCenter = -91;
		t.visible = false;
		t.width = 350;
		return t;
	};
	_proto.goBtn_i = function () {
		var t = new MyButton();
		this.goBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 266;
		t.height = 86.81;
		t.horizontalCenter = -9;
		t.label = "AnotherBall_2";
		t.width = 182.12;
		t.skinName = GoAnotherBallSkin$Skin14;
		return t;
	};
	return GoAnotherBallSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/PlayerHead.exml'] = window.PlayerHeadSkin = (function (_super) {
	__extends(PlayerHeadSkin, _super);
	function PlayerHeadSkin() {
		_super.call(this);
		this.skinParts = ["playerImgbg","playerImg","starConstainer","breakthrought"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this.playerImgbg_i(),this.playerImg_i(),this.starConstainer_i(),this.breakthrought_i()];
	}
	var _proto = PlayerHeadSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 91;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(13,16,3,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_028";
		t.verticalCenter = 0;
		t.width = 91;
		return t;
	};
	_proto.playerImgbg_i = function () {
		var t = new eui.Image();
		this.playerImgbg = t;
		t.height = 91;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(13,16,3,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 91;
		return t;
	};
	_proto.playerImg_i = function () {
		var t = new eui.Image();
		this.playerImg = t;
		t.height = 77;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(13,16,3,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_007";
		t.verticalCenter = 0;
		t.width = 73;
		return t;
	};
	_proto.starConstainer_i = function () {
		var t = new eui.Group();
		this.starConstainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.horizontalCenter = 0;
		t.verticalCenter = 49;
		t.width = 140;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "wddx_ic_029";
		t.width = 21;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "wddx_ic_029";
		t.width = 21;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "wddx_ic_029";
		t.width = 21;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "wddx_ic_029";
		t.width = 21;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "wddx_ic_029";
		t.width = 21;
		return t;
	};
	_proto.breakthrought_i = function () {
		var t = new eui.Label();
		this.breakthrought = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "1PlayerHead_11PlayerHead_2";
		t.textAlign = "center";
		t.textColor = 0x51f91b;
		t.verticalAlign = "middle";
		t.verticalCenter = 69;
		t.width = 200;
		return t;
	};
	return PlayerHeadSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/ResourceBtn.exml'] = window.ResourceBtnSkin = (function (_super) {
	__extends(ResourceBtnSkin, _super);
	function ResourceBtnSkin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 50;
		this.width = 168;
		this.elementsContent = [this._Image1_i(),this.iconDisplay_i(),this._Image2_i(),this.labelDisplay_i()];
	}
	var _proto = ResourceBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.left = 28;
		t.right = 6;
		t.scale9Grid = new egret.Rectangle(19,17,1,2);
		t.source = "wddx_bg_008";
		t.top = 8;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.height = 40;
		t.left = 11;
		t.source = "wddx_ic_004";
		t.top = 6;
		t.width = 40;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 22;
		t.left = 33;
		t.source = "wddx_ic_006";
		t.top = 26;
		t.width = 22;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.left = 55;
		t.right = 13;
		t.size = 26;
		t.text = "999999";
		t.textAlign = "center";
		t.top = 12;
		t.verticalAlign = "middle";
		return t;
	};
	return ResourceBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/SevenSignButton.exml'] = window.SevenSignButtonSkin = (function (_super) {
	__extends(SevenSignButtonSkin, _super);
	function SevenSignButtonSkin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","redpoint"];
		
		this.height = 77;
		this.width = 75;
		this.elementsContent = [this.iconDisplay_i(),this.redpoint_i(),this._Image1_i()];
	}
	var _proto = SevenSignButtonSkin.prototype;

	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "wddx_qd_01";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.redpoint_i = function () {
		var t = new eui.Image();
		this.redpoint = t;
		t.height = 25;
		t.right = -9;
		t.source = "wddx_red_point";
		t.top = -6;
		t.width = 24;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = -8;
		t.height = 29;
		t.horizontalCenter = 3;
		t.source = "wddx_qd_02";
		t.width = 53;
		return t;
	};
	return SevenSignButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/TipsItem.exml'] = window.TipsItemSkin = (function (_super) {
	__extends(TipsItemSkin, _super);
	function TipsItemSkin() {
		_super.call(this);
		this.skinParts = ["tipsLabel"];
		
		this.height = 74;
		this.width = 528;
		this.elementsContent = [this._Image1_i(),this.tipsLabel_i()];
	}
	var _proto = TipsItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(20,5,3,2);
		t.source = "wddx_bg_0015";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.tipsLabel_i = function () {
		var t = new eui.Label();
		this.tipsLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "label";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TipsItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/TipsPanel.exml'] = window.TipsPanelSkin = (function (_super) {
	__extends(TipsPanelSkin, _super);
	function TipsPanelSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1136;
		this.width = 640;
	}
	var _proto = TipsPanelSkin.prototype;

	return TipsPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/ToggleBtnGroup.exml'] = window.ToggleBtnGroupSkin = (function (_super) {
	__extends(ToggleBtnGroupSkin, _super);
	var ToggleBtnGroupSkin$Skin15 = 	(function (_super) {
		__extends(ToggleBtnGroupSkin$Skin15, _super);
		function ToggleBtnGroupSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["selectDisplay","typeIcon","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.selectDisplay_i(),this.typeIcon_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ToggleBtnGroupSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(21,0,0,111);
			t.source = "wddx_bt_010";
			t.percentWidth = 100;
			return t;
		};
		_proto.selectDisplay_i = function () {
			var t = new eui.Image();
			this.selectDisplay = t;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(21,0,0,111);
			t.source = "wddx_bt_009";
			t.percentWidth = 100;
			return t;
		};
		_proto.typeIcon_i = function () {
			var t = new eui.Image();
			this.typeIcon = t;
			t.horizontalCenter = 0;
			t.source = "wa_jues";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 22;
			t.stroke = 2;
			t.strokeColor = 0x000000;
			t.verticalCenter = 34;
			t.visible = false;
			return t;
		};
		return ToggleBtnGroupSkin$Skin15;
	})(eui.Skin);

	var ToggleBtnGroupSkin$Skin16 = 	(function (_super) {
		__extends(ToggleBtnGroupSkin$Skin16, _super);
		function ToggleBtnGroupSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["selectDisplay","typeIcon","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.selectDisplay_i(),this.typeIcon_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ToggleBtnGroupSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(21,0,0,111);
			t.source = "wddx_bt_010";
			t.percentWidth = 100;
			return t;
		};
		_proto.selectDisplay_i = function () {
			var t = new eui.Image();
			this.selectDisplay = t;
			t.alpha = 0;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(21,0,0,111);
			t.source = "wddx_bt_009";
			t.percentWidth = 100;
			return t;
		};
		_proto.typeIcon_i = function () {
			var t = new eui.Image();
			this.typeIcon = t;
			t.horizontalCenter = 0;
			t.source = "wa_mofa";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 22;
			t.stroke = 2;
			t.strokeColor = 0x000000;
			t.verticalCenter = 34;
			t.visible = false;
			return t;
		};
		return ToggleBtnGroupSkin$Skin16;
	})(eui.Skin);

	var ToggleBtnGroupSkin$Skin17 = 	(function (_super) {
		__extends(ToggleBtnGroupSkin$Skin17, _super);
		function ToggleBtnGroupSkin$Skin17() {
			_super.call(this);
			this.skinParts = ["selectDisplay","typeIcon","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.selectDisplay_i(),this.typeIcon_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ToggleBtnGroupSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(21,0,0,111);
			t.source = "wddx_bt_010";
			t.percentWidth = 100;
			return t;
		};
		_proto.selectDisplay_i = function () {
			var t = new eui.Image();
			this.selectDisplay = t;
			t.alpha = 0;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(21,0,0,111);
			t.source = "wddx_bt_009";
			t.percentWidth = 100;
			return t;
		};
		_proto.typeIcon_i = function () {
			var t = new eui.Image();
			this.typeIcon = t;
			t.horizontalCenter = 0;
			t.source = "wa_yajiu";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 22;
			t.stroke = 2;
			t.strokeColor = 0x000000;
			t.verticalCenter = 34;
			t.visible = false;
			return t;
		};
		return ToggleBtnGroupSkin$Skin17;
	})(eui.Skin);

	var ToggleBtnGroupSkin$Skin18 = 	(function (_super) {
		__extends(ToggleBtnGroupSkin$Skin18, _super);
		function ToggleBtnGroupSkin$Skin18() {
			_super.call(this);
			this.skinParts = ["selectDisplay","typeIcon","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.selectDisplay_i(),this.typeIcon_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ToggleBtnGroupSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(21,0,0,111);
			t.source = "wddx_bt_010";
			t.percentWidth = 100;
			return t;
		};
		_proto.selectDisplay_i = function () {
			var t = new eui.Image();
			this.selectDisplay = t;
			t.alpha = 0;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(21,0,0,111);
			t.source = "wddx_bt_009";
			t.percentWidth = 100;
			return t;
		};
		_proto.typeIcon_i = function () {
			var t = new eui.Image();
			this.typeIcon = t;
			t.horizontalCenter = 0;
			t.source = "wa_shouc";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 22;
			t.stroke = 2;
			t.strokeColor = 0x000000;
			t.verticalCenter = 34;
			t.visible = false;
			return t;
		};
		return ToggleBtnGroupSkin$Skin18;
	})(eui.Skin);

	function ToggleBtnGroupSkin() {
		_super.call(this);
		this.skinParts = ["playerBtn0","magicBtn0","skillBtn0","collectBtn0","btnGroup","redPointGroup"];
		
		this.height = 111;
		this.width = 640;
		this.elementsContent = [this.btnGroup_i(),this.redPointGroup_i()];
	}
	var _proto = ToggleBtnGroupSkin.prototype;

	_proto.btnGroup_i = function () {
		var t = new eui.Group();
		this.btnGroup = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.playerBtn0_i(),this.magicBtn0_i(),this.skillBtn0_i(),this.collectBtn0_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.playerBtn0_i = function () {
		var t = new ToggleBtn();
		this.playerBtn0 = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 55.5;
		t.height = 111;
		t.icon = "wddx_ic_001";
		t.label = "ToggleBtnGroup_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 124;
		t.x = 93;
		t.y = 58;
		t.skinName = ToggleBtnGroupSkin$Skin15;
		return t;
	};
	_proto.magicBtn0_i = function () {
		var t = new ToggleBtn();
		this.magicBtn0 = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 55.5;
		t.height = 111;
		t.icon = "wddx_ic_002";
		t.label = "ToggleBtnGroup_2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 124;
		t.x = 246;
		t.y = 58;
		t.skinName = ToggleBtnGroupSkin$Skin16;
		return t;
	};
	_proto.skillBtn0_i = function () {
		var t = new ToggleBtn();
		this.skillBtn0 = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 55.5;
		t.height = 111;
		t.icon = "wddx_ic_003";
		t.label = "ToggleBtnGroup_3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 124;
		t.x = 398;
		t.y = 58;
		t.skinName = ToggleBtnGroupSkin$Skin17;
		return t;
	};
	_proto.collectBtn0_i = function () {
		var t = new ToggleBtn();
		this.collectBtn0 = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 55.5;
		t.height = 111;
		t.icon = "wddx_ic_004";
		t.label = "ToggleBtnGroup_4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 124;
		t.x = 547;
		t.y = 58;
		t.skinName = ToggleBtnGroupSkin$Skin18;
		return t;
	};
	_proto.redPointGroup_i = function () {
		var t = new eui.Group();
		this.redPointGroup = t;
		t.height = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.layout = this._BasicLayout2_i();
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._BasicLayout2_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_red_point";
		t.touchEnabled = false;
		t.visible = false;
		t.width = 24;
		t.x = 130.01;
		t.y = 4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_red_point";
		t.touchEnabled = false;
		t.width = 24;
		t.x = 283.01;
		t.y = 4;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_red_point";
		t.touchEnabled = false;
		t.width = 24;
		t.x = 435.01;
		t.y = 4;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_red_point";
		t.touchEnabled = false;
		t.visible = false;
		t.width = 24;
		t.x = 583.6699999999998;
		t.y = 4;
		return t;
	};
	return ToggleBtnGroupSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/TreasureBox.exml'] = window.TreasureBoxSkin = (function (_super) {
	__extends(TreasureBoxSkin, _super);
	var TreasureBoxSkin$Skin19 = 	(function (_super) {
		__extends(TreasureBoxSkin$Skin19, _super);
		function TreasureBoxSkin$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TreasureBoxSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(20,0,0,79);
			t.source = "wddx_bt_007";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 30;
			t.verticalCenter = -3;
			return t;
		};
		return TreasureBoxSkin$Skin19;
	})(eui.Skin);

	function TreasureBoxSkin() {
		_super.call(this);
		this.skinParts = ["runBg","iconName","clickCount","timeText","processSlider","tishi","giveupBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.runBg_i(),this._Image1_i(),this.iconName_i(),this.clickCount_i(),this._Image2_i(),this.timeText_i(),this.processSlider_i(),this.tishi_i(),this.giveupBtn_i()];
	}
	var _proto = TreasureBoxSkin.prototype;

	_proto.runBg_i = function () {
		var t = new eui.Image();
		this.runBg = t;
		t.anchorOffsetX = 381.5;
		t.anchorOffsetY = 332.5;
		t.horizontalCenter = 0.5;
		t.source = "wddx_light_001_png";
		t.verticalCenter = -41.5;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 101;
		t.anchorOffsetY = 101;
		t.height = 101;
		t.horizontalCenter = 0;
		t.source = "wddx_ft_001";
		t.verticalCenter = -318.5;
		t.width = 318;
		return t;
	};
	_proto.iconName_i = function () {
		var t = new eui.Image();
		this.iconName = t;
		t.anchorOffsetX = 101;
		t.anchorOffsetY = 101;
		t.height = 202;
		t.horizontalCenter = 0;
		t.source = "wddx_bao_001";
		t.verticalCenter = -42;
		t.width = 202;
		return t;
	};
	_proto.clickCount_i = function () {
		var t = new eui.Image();
		this.clickCount = t;
		t.alpha = 0;
		t.anchorOffsetX = 381.5;
		t.anchorOffsetY = 332.5;
		t.horizontalCenter = 0.5;
		t.source = "wddx_light_001_png";
		t.verticalCenter = -41.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.horizontalCenter = 0.5;
		t.source = "wddx_bg_0018";
		t.verticalCenter = 102.5;
		t.width = 435;
		return t;
	};
	_proto.timeText_i = function () {
		var t = new eui.Label();
		this.timeText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.text = "TreasureBox_1";
		t.verticalCenter = 102;
		return t;
	};
	_proto.processSlider_i = function () {
		var t = new eui.HSlider();
		this.processSlider = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 427;
		t.height = 20;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "bloodSliderSkin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 298;
		t.x = 171;
		t.y = -26.070000000000164;
		return t;
	};
	_proto.tishi_i = function () {
		var t = new eui.Label();
		this.tishi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "TreasureBox_2.";
		t.verticalCenter = 182;
		return t;
	};
	_proto.giveupBtn_i = function () {
		var t = new MyButton();
		this.giveupBtn = t;
		t.height = 79;
		t.horizontalCenter = -11;
		t.label = "TreasureBox_3";
		t.verticalCenter = 274.5;
		t.width = 182;
		t.skinName = TreasureBoxSkin$Skin19;
		return t;
	};
	return TreasureBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/public/TreasureBoxResult.exml'] = window.TreasureBoxResultSkin = (function (_super) {
	__extends(TreasureBoxResultSkin, _super);
	var TreasureBoxResultSkin$Skin20 = 	(function (_super) {
		__extends(TreasureBoxResultSkin$Skin20, _super);
		function TreasureBoxResultSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TreasureBoxResultSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wddx_bt_005";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TreasureBoxResultSkin$Skin20;
	})(eui.Skin);

	var TreasureBoxResultSkin$Skin21 = 	(function (_super) {
		__extends(TreasureBoxResultSkin$Skin21, _super);
		function TreasureBoxResultSkin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TreasureBoxResultSkin$Skin21.prototype;

		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 32;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return TreasureBoxResultSkin$Skin21;
	})(eui.Skin);

	var TreasureBoxResultSkin$Skin22 = 	(function (_super) {
		__extends(TreasureBoxResultSkin$Skin22, _super);
		function TreasureBoxResultSkin$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TreasureBoxResultSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(19,9,0,61);
			t.source = "wddx_bt_007";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = -1.5;
			t.size = 32;
			t.text = "";
			t.verticalCenter = -5;
			return t;
		};
		return TreasureBoxResultSkin$Skin22;
	})(eui.Skin);

	function TreasureBoxResultSkin() {
		_super.call(this);
		this.skinParts = ["guangxiao","scName","www_199","getCount","shoucangpinTxt","closeBtn","getBtn","doubleGetBtn","tryCon","bkCon"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.guangxiao_i(),this.scName_i(),this.www_199_i(),this.getCount_i(),this.shoucangpinTxt_i(),this.closeBtn_i(),this.getBtn_i(),this.doubleGetBtn_i(),this.tryCon_i(),this.bkCon_i()];
	}
	var _proto = TreasureBoxResultSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 741.88;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(184,69,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0012";
		t.width = 560;
		t.y = 15.76;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(45,0,0,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0014";
		t.width = 274;
		t.y = 25.59;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 460;
		t.scale9Grid = new egret.Rectangle(19,16,0,0);
		t.source = "wddx_bg_0013";
		t.width = 524;
		t.x = 58;
		t.y = 136.49;
		return t;
	};
	_proto.guangxiao_i = function () {
		var t = new eui.Image();
		this.guangxiao = t;
		t.anchorOffsetX = 221;
		t.anchorOffsetY = 224;
		t.height = 448;
		t.horizontalCenter = 0;
		t.source = "wddx_guang_png";
		t.verticalCenter = -205;
		t.width = 442;
		return t;
	};
	_proto.scName_i = function () {
		var t = new eui.Image();
		this.scName = t;
		t.horizontalCenter = 11.5;
		t.source = "";
		t.verticalCenter = -193.5;
		return t;
	};
	_proto.www_199_i = function () {
		var t = new eui.Label();
		this.www_199 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 36;
		t.text = "TreasureBoxResult_1";
		t.x = 246.34;
		t.y = 38.43;
		return t;
	};
	_proto.getCount_i = function () {
		var t = new eui.Label();
		this.getCount = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.horizontalCenter = 0;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -9;
		t.width = 506;
		return t;
	};
	_proto.shoucangpinTxt_i = function () {
		var t = new eui.Label();
		this.shoucangpinTxt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "TreasureBoxResult_2";
		t.textAlign = "center";
		t.verticalCenter = 56;
		t.visible = false;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 537.99;
		t.y = 29.73;
		t.skinName = TreasureBoxResultSkin$Skin20;
		return t;
	};
	_proto.getBtn_i = function () {
		var t = new MyButton();
		this.getBtn = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.label = "TreasureBoxResult_3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.soundName = "\"\"";
		t.width = 182;
		t.y = 744;
		t.skinName = TreasureBoxResultSkin$Skin21;
		return t;
	};
	_proto.doubleGetBtn_i = function () {
		var t = new MyButton();
		this.doubleGetBtn = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.label = "TreasureBoxResult_4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.soundName = "\"\"";
		t.width = 182;
		t.y = 649.53;
		t.skinName = TreasureBoxResultSkin$Skin22;
		return t;
	};
	_proto.tryCon_i = function () {
		var t = new eui.Group();
		this.tryCon = t;
		t.height = 30;
		t.width = 600;
		t.x = 20;
		t.y = 799;
		return t;
	};
	_proto.bkCon_i = function () {
		var t = new eui.Group();
		this.bkCon = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 424.53;
		t.y = 629.67;
		return t;
	};
	return TreasureBoxResultSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/rank/RankPanel.exml'] = window.RankPanelSkin = (function (_super) {
	__extends(RankPanelSkin, _super);
	var RankPanelSkin$Skin23 = 	(function (_super) {
		__extends(RankPanelSkin$Skin23, _super);
		function RankPanelSkin$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RankPanelSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wddx_bt_005";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RankPanelSkin$Skin23;
	})(eui.Skin);

	function RankPanelSkin() {
		_super.call(this);
		this.skinParts = ["rankTitle","www_223","www_224","www_225","aniAdCon","shareToGroupBtn","rankCloseBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i(),this.shareToGroupBtn_i(),this.rankCloseBtn_i()];
	}
	var _proto = RankPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.rankTitle_i(),this.www_223_i(),this.www_224_i(),this.www_225_i(),this.aniAdCon_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 876;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(178,71,17,3);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0012";
		t.verticalCenter = 0;
		t.width = 605.33;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 654.06;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(23,14,7,3);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0013";
		t.verticalCenter = -10;
		t.width = 581;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(43,0,7,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0014";
		t.verticalCenter = -402;
		t.width = 330;
		return t;
	};
	_proto.rankTitle_i = function () {
		var t = new eui.Label();
		this.rankTitle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 71;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 39;
		t.text = "ProRank_1";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = -404.5;
		t.width = 346;
		return t;
	};
	_proto.www_223_i = function () {
		var t = new eui.Label();
		this.www_223 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.horizontalCenter = -166;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "ProRank_2";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = -312;
		t.width = 100;
		return t;
	};
	_proto.www_224_i = function () {
		var t = new eui.Label();
		this.www_224 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.horizontalCenter = 3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "ProRank_3";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = -312;
		t.width = 100;
		return t;
	};
	_proto.www_225_i = function () {
		var t = new eui.Label();
		this.www_225 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.horizontalCenter = 172;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "ProRank_4";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = -312;
		t.width = 100;
		return t;
	};
	_proto.aniAdCon_i = function () {
		var t = new eui.Group();
		this.aniAdCon = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 0;
		t.y = 106;
		return t;
	};
	_proto.shareToGroupBtn_i = function () {
		var t = new MyButton();
		this.shareToGroupBtn = t;
		t.height = 34;
		t.horizontalCenter = 0;
		t.label = "ProRank_5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "button4Skin";
		t.verticalCenter = 475;
		t.width = 104;
		return t;
	};
	_proto.rankCloseBtn_i = function () {
		var t = new MyButton();
		this.rankCloseBtn = t;
		t.horizontalCenter = 264;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -381;
		t.skinName = RankPanelSkin$Skin23;
		return t;
	};
	return RankPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ShareNotice.exml'] = window.ShareNoticeSkin = (function (_super) {
	__extends(ShareNoticeSkin, _super);
	var ShareNoticeSkin$Skin24 = 	(function (_super) {
		__extends(ShareNoticeSkin$Skin24, _super);
		function ShareNoticeSkin$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShareNoticeSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(19,9,0,61);
			t.source = "wddx_bt_006";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = -1.5;
			t.size = 32;
			t.text = "";
			t.textColor = 0x34630c;
			t.verticalCenter = -5;
			return t;
		};
		return ShareNoticeSkin$Skin24;
	})(eui.Skin);

	function ShareNoticeSkin() {
		_super.call(this);
		this.skinParts = ["www_57","subtitleLabel","tipsLabel","closeBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.www_57_i(),this.subtitleLabel_i(),this._Image4_i(),this.tipsLabel_i(),this.closeBtn_i()];
	}
	var _proto = ShareNoticeSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 504;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(184,69,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0012";
		t.width = 560;
		t.y = 314.55;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(45,0,0,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0014";
		t.width = 274;
		t.y = 324.38;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 253.33;
		t.scale9Grid = new egret.Rectangle(19,16,0,0);
		t.source = "wddx_bg_0013";
		t.width = 524;
		t.x = 58;
		t.y = 441.22;
		return t;
	};
	_proto.www_57_i = function () {
		var t = new eui.Label();
		this.www_57 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 36;
		t.text = "ShareNotice_1";
		t.y = 333.23;
		return t;
	};
	_proto.subtitleLabel_i = function () {
		var t = new eui.Label();
		this.subtitleLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 52;
		t.horizontalCenter = 0;
		t.text = "tipsLabel";
		t.textAlign = "center";
		t.textColor = 0x5af427;
		t.verticalAlign = "middle";
		t.verticalCenter = -88;
		t.width = 506;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 4;
		t.horizontalCenter = 0;
		t.source = "wddx_bg_0011";
		t.width = 524;
		t.y = 514.22;
		return t;
	};
	_proto.tipsLabel_i = function () {
		var t = new eui.Label();
		this.tipsLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "tipsLabel";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 28;
		t.width = 506;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.label = "ShareNotice_2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.soundName = "\"\"";
		t.width = 182;
		t.y = 716.52;
		t.skinName = ShareNoticeSkin$Skin24;
		return t;
	};
	return ShareNoticeSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/SoundLuckBtn.exml'] = window.SoundLuckBtnSkin = (function (_super) {
	__extends(SoundLuckBtnSkin, _super);
	function SoundLuckBtnSkin() {
		_super.call(this);
		this.skinParts = ["unluck","labelDisplay"];
		
		this.height = 152;
		this.width = 117;
		this.elementsContent = [this._Image1_i(),this.unluck_i(),this.labelDisplay_i()];
	}
	var _proto = SoundLuckBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 113;
		t.horizontalCenter = 0;
		t.source = "wddx_bt_016";
		t.verticalCenter = -10;
		t.width = 83;
		return t;
	};
	_proto.unluck_i = function () {
		var t = new eui.Image();
		this.unluck = t;
		t.height = 113;
		t.horizontalCenter = -0.5;
		t.source = "wddx_bt_022";
		t.verticalCenter = -9.5;
		t.width = 83;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 2;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 45;
		t.width = 150;
		return t;
	};
	return SoundLuckBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/BallVeiw.exml'] = window.BallVeiwSkin = (function (_super) {
	__extends(BallVeiwSkin, _super);
	function BallVeiwSkin() {
		_super.call(this);
		this.skinParts = ["depth","progress"];
		
		this.height = 80;
		this.width = 200;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.depth_i(),this.progress_i()];
	}
	var _proto = BallVeiwSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 52;
		t.left = 23;
		t.scale9Grid = new egret.Rectangle(19,15,2,4);
		t.source = "wddx_bg_008";
		t.top = 14;
		t.width = 174;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.left = 2;
		t.source = "wddx_ic_008";
		t.top = 8;
		t.width = 65;
		return t;
	};
	_proto.depth_i = function () {
		var t = new eui.Label();
		this.depth = t;
		t.anchorOffsetX = 0;
		t.left = 73;
		t.size = 26;
		t.text = "ProBallView_1:999";
		t.verticalCenter = 0;
		t.width = 114.33;
		return t;
	};
	_proto.progress_i = function () {
		var t = new eui.Label();
		this.progress = t;
		t.anchorOffsetX = 0;
		t.left = 77;
		t.size = 18;
		t.text = "ProBallView_2:1/999";
		t.top = 41;
		t.visible = false;
		t.width = 116;
		return t;
	};
	return BallVeiwSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/BallViewItem.exml'] = window.BallViewItemSkin = (function (_super) {
	__extends(BallViewItemSkin, _super);
	function BallViewItemSkin() {
		_super.call(this);
		this.skinParts = ["resName","ballName"];
		
		this.height = 120;
		this.width = 100;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = BallViewItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 76;
		t.elementsContent = [this.resName_i(),this.ballName_i()];
		return t;
	};
	_proto.resName_i = function () {
		var t = new eui.Image();
		this.resName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.ballName_i = function () {
		var t = new eui.Label();
		this.ballName = t;
		t.bottom = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "";
		return t;
	};
	return BallViewItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/BallViewProgress.exml'] = window.BallViewProgressSkin = (function (_super) {
	__extends(BallViewProgressSkin, _super);
	var BallViewProgressSkin$Skin25 = 	(function (_super) {
		__extends(BallViewProgressSkin$Skin25, _super);
		function BallViewProgressSkin$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BallViewProgressSkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wddx_bt_005";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BallViewProgressSkin$Skin25;
	})(eui.Skin);

	function BallViewProgressSkin() {
		_super.call(this);
		this.skinParts = ["bg0","bg1","bg2","titleTxt","ballImg","selfHeadImg","selfDistance","jiantouImg","distanceGroup","balls","closeBtn"];
		
		this.height = 608;
		this.width = 603;
		this.elementsContent = [this._Group1_i(),this.closeBtn_i()];
	}
	var _proto = BallViewProgressSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 608;
		t.horizontalCenter = 0;
		t.width = 560;
		t.y = 0;
		t.elementsContent = [this.bg0_i(),this.bg1_i(),this.bg2_i(),this.titleTxt_i(),this.ballImg_i(),this.distanceGroup_i(),this._Scroller1_i()];
		return t;
	};
	_proto.bg0_i = function () {
		var t = new eui.Image();
		this.bg0 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(184,76,1,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0012";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg1_i = function () {
		var t = new eui.Image();
		this.bg1 = t;
		t.height = 64;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(45,0,0,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0014";
		t.width = 275;
		t.y = 9.4;
		return t;
	};
	_proto.bg2_i = function () {
		var t = new eui.Image();
		this.bg2 = t;
		t.height = 478;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(19,16,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0013";
		t.width = 524;
		t.y = 105.82;
		return t;
	};
	_proto.titleTxt_i = function () {
		var t = new eui.Label();
		this.titleTxt = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "ProBallView_4";
		t.textAlign = "center";
		t.width = 184.12;
		t.y = 24.08;
		return t;
	};
	_proto.ballImg_i = function () {
		var t = new eui.Image();
		this.ballImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.horizontalCenter = 0;
		t.scaleX = 4;
		t.scaleY = 4;
		t.source = "wddx_ball_01_png";
		t.width = 76;
		t.y = 135.09;
		return t;
	};
	_proto.distanceGroup_i = function () {
		var t = new eui.Group();
		this.distanceGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.width = 134;
		t.x = 291;
		t.y = 157;
		t.elementsContent = [this.selfHeadImg_i(),this.selfDistance_i(),this.jiantouImg_i()];
		return t;
	};
	_proto.selfHeadImg_i = function () {
		var t = new eui.Image();
		this.selfHeadImg = t;
		t.height = 58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_019";
		t.width = 58;
		t.x = 174.65;
		t.y = -19.69;
		return t;
	};
	_proto.selfDistance_i = function () {
		var t = new eui.Label();
		this.selfDistance = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "ProBallView_5";
		t.x = 125.44;
		t.y = 42;
		return t;
	};
	_proto.jiantouImg_i = function () {
		var t = new eui.Image();
		this.jiantouImg = t;
		t.scale9Grid = new egret.Rectangle(25,0,2,22);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_031";
		t.width = 170;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 120;
		t.width = 471.21;
		t.x = 44;
		t.y = 446.47;
		t.viewport = this.balls_i();
		return t;
	};
	_proto.balls_i = function () {
		var t = new eui.Group();
		this.balls = t;
		t.height = 120;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.label = "";
		t.x = 517.48;
		t.y = 0.28;
		t.skinName = BallViewProgressSkin$Skin25;
		return t;
	};
	return BallViewProgressSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/BattleModel.exml'] = window.BattleModelSkin = (function (_super) {
	__extends(BattleModelSkin, _super);
	function BattleModelSkin() {
		_super.call(this);
		this.skinParts = ["bg","stoneConstainer","stoneLiefengContainer","mcConstainer","side","playerContainer","paopaoContainer","www_55","guideObject","hithit"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this.stoneConstainer_i(),this.stoneLiefengContainer_i(),this.mcConstainer_i(),this.side_i(),this.playerContainer_i(),this.paopaoContainer_i(),this.guideObject_i(),this.hithit_i()];
	}
	var _proto = BattleModelSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.y = -300;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = -88;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 224;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_tu_bg_png";
		t.percentWidth = 100;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 224;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_tu_bg_png";
		t.percentWidth = 100;
		t.y = 139.84;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 224;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_tu_bg_png";
		t.percentWidth = 100;
		t.y = 278.97;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 224;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_tu_bg_png";
		t.percentWidth = 100;
		t.y = 417.97;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 224;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_tu_bg_png";
		t.percentWidth = 100;
		t.y = 558.03;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 224;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_tu_bg_png";
		t.percentWidth = 100;
		t.y = 697;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 224;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_tu_bg_png";
		t.percentWidth = 100;
		t.y = 836.93;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 224;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_tu_bg_png";
		t.percentWidth = 100;
		t.y = 976.34;
		return t;
	};
	_proto.stoneConstainer_i = function () {
		var t = new eui.Group();
		this.stoneConstainer = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 251;
		t.fillMode = "scale";
		t.height = 311;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_tu_1_png";
		t.width = 628;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 363;
		t.fillMode = "scale";
		t.height = 311;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_tu_1_png";
		t.width = 628;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 475;
		t.fillMode = "scale";
		t.height = 311;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_tu_1_png";
		t.width = 628;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 587;
		t.fillMode = "scale";
		t.height = 311;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_tu_1_png";
		t.width = 628;
		return t;
	};
	_proto.stoneLiefengContainer_i = function () {
		var t = new eui.Group();
		this.stoneLiefengContainer = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.y = 0;
		t.elementsContent = [this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 587;
		t.fillMode = "scale";
		t.height = 311;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_lf_02_png";
		t.visible = false;
		t.width = 628;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 587;
		t.fillMode = "scale";
		t.height = 311;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_lf_01_png";
		t.visible = false;
		t.width = 628;
		return t;
	};
	_proto.mcConstainer_i = function () {
		var t = new eui.Group();
		this.mcConstainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 642;
		t.height = 212;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto.side_i = function () {
		var t = new eui.Group();
		this.side = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.y = -295;
		t.elementsContent = [this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = -1;
		t.source = "wddx_tu_side_png";
		t.width = 63;
		t.y = 0;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.percentHeight = 100;
		t.right = 0;
		t.scaleX = 1;
		t.source = "wddx_tu_side_png";
		t.width = 63;
		t.y = 0;
		return t;
	};
	_proto.playerContainer_i = function () {
		var t = new eui.Group();
		this.playerContainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.y = 0;
		t.elementsContent = [this._PlayerModel1_i(),this._PlayerModel2_i(),this._PlayerModel3_i(),this._PlayerModel4_i(),this._PlayerModel5_i(),this._PlayerModel6_i(),this._PlayerModel7_i(),this._PlayerModel8_i(),this._HandPlayerModel1_i(),this._PlayerModel9_i(),this._PlayerModel10_i()];
		return t;
	};
	_proto._PlayerModel1_i = function () {
		var t = new PlayerModel();
		t.bottom = 867;
		t.height = 20;
		t.horizontalCenter = -49;
		t.width = 20;
		return t;
	};
	_proto._PlayerModel2_i = function () {
		var t = new PlayerModel();
		t.bottom = 829;
		t.height = 20;
		t.horizontalCenter = 23;
		t.width = 20;
		return t;
	};
	_proto._PlayerModel3_i = function () {
		var t = new PlayerModel();
		t.bottom = 854;
		t.height = 20;
		t.horizontalCenter = 114;
		t.width = 20;
		return t;
	};
	_proto._PlayerModel4_i = function () {
		var t = new PlayerModel();
		t.bottom = 791;
		t.height = 20;
		t.horizontalCenter = -226;
		t.width = 20;
		return t;
	};
	_proto._PlayerModel5_i = function () {
		var t = new PlayerModel();
		t.bottom = 789;
		t.height = 20;
		t.horizontalCenter = -76;
		t.width = 20;
		return t;
	};
	_proto._PlayerModel6_i = function () {
		var t = new PlayerModel();
		t.bottom = 779;
		t.height = 20;
		t.horizontalCenter = 72;
		t.width = 20;
		return t;
	};
	_proto._PlayerModel7_i = function () {
		var t = new PlayerModel();
		t.bottom = 785;
		t.height = 20;
		t.horizontalCenter = 158;
		t.width = 20;
		return t;
	};
	_proto._PlayerModel8_i = function () {
		var t = new PlayerModel();
		t.bottom = 710;
		t.height = 20;
		t.horizontalCenter = -119;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 20;
		return t;
	};
	_proto._HandPlayerModel1_i = function () {
		var t = new HandPlayerModel();
		t.bottom = 723;
		t.height = 20;
		t.horizontalCenter = -2;
		t.width = 20;
		return t;
	};
	_proto._PlayerModel9_i = function () {
		var t = new PlayerModel();
		t.bottom = 718;
		t.height = 20;
		t.horizontalCenter = 134;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 20;
		return t;
	};
	_proto._PlayerModel10_i = function () {
		var t = new PlayerModel();
		t.bottom = 981;
		t.height = 20;
		t.horizontalCenter = -18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 20;
		return t;
	};
	_proto.paopaoContainer_i = function () {
		var t = new eui.Group();
		this.paopaoContainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 534;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.guideObject_i = function () {
		var t = new eui.Group();
		this.guideObject = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 534;
		t.height = 602;
		t.horizontalCenter = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this._Image17_i(),this._Image18_i(),this.www_55_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 75;
		t.anchorOffsetY = 50;
		t.height = 79;
		t.source = "wddx_ic_010";
		t.width = 106;
		t.x = 375.38;
		t.y = 476.24;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 146.74;
		t.scale9Grid = new egret.Rectangle(127,36,5,3);
		t.source = "yindaotishi";
		t.width = 202.33;
		t.x = 351.38;
		t.y = 292.17;
		return t;
	};
	_proto.www_55_i = function () {
		var t = new eui.Label();
		this.www_55 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "BattleModel_1";
		t.textColor = 0xffffff;
		t.x = 362.06;
		t.y = 323.53;
		return t;
	};
	_proto.hithit_i = function () {
		var t = new HitHitPanel();
		this.hithit = t;
		t.bottom = 969;
		t.height = 70;
		t.horizontalCenter = 0;
		t.visible = false;
		return t;
	};
	return BattleModelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/CollectListItem.exml'] = window.CollectListItemSkin = (function (_super) {
	__extends(CollectListItemSkin, _super);
	var CollectListItemSkin$Skin26 = 	(function (_super) {
		__extends(CollectListItemSkin$Skin26, _super);
		function CollectListItemSkin$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CollectListItemSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 116;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(19,0,0,57);
			t.source = "wddx_bt_003";
			t.verticalCenter = 0;
			t.width = 190;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 36;
			t.text = "";
			t.textColor = 0x41680f;
			t.verticalCenter = -5;
			return t;
		};
		return CollectListItemSkin$Skin26;
	})(eui.Skin);

	function CollectListItemSkin() {
		_super.call(this);
		this.skinParts = ["maskImg","scImg","collectName","jiangliText","head","sc_icon0","sc_count0","sc_buff0","sc0","sc_icon1","sc_count1","sc_buff1","sc1","sc_icon2","sc_count2","sc_buff2","sc2","sc_icon3","sc_count3","sc_buff3","sc3","sc_icon4","sc_count4","sc_buff4","sc4","lingquBtn"];
		
		this.height = 110;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.head_i(),this.sc0_i(),this.sc1_i(),this.sc2_i(),this.sc3_i(),this.sc4_i(),this.lingquBtn_i()];
	}
	var _proto = CollectListItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 110;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(12,12,5,3);
		t.source = "wddx_bg_004";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Group();
		this.head = t;
		t.height = 92;
		t.left = 14;
		t.top = 8;
		t.width = 90;
		t.elementsContent = [this.maskImg_i(),this.scImg_i(),this._Image2_i(),this.collectName_i(),this.jiangliText_i()];
		return t;
	};
	_proto.maskImg_i = function () {
		var t = new eui.Image();
		this.maskImg = t;
		t.height = 92;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(13,16,3,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_008";
		t.top = 0;
		t.width = 90;
		return t;
	};
	_proto.scImg_i = function () {
		var t = new eui.Image();
		this.scImg = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(13,16,3,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_009";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 24;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,0,0,24);
		t.source = "wddx_bg_022";
		t.width = 90;
		return t;
	};
	_proto.collectName_i = function () {
		var t = new eui.Label();
		this.collectName = t;
		t.bottom = 3;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "ProCollect_6";
		return t;
	};
	_proto.jiangliText_i = function () {
		var t = new eui.Label();
		this.jiangliText = t;
		t.bottom = 3;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "+100";
		t.visible = false;
		return t;
	};
	_proto.sc0_i = function () {
		var t = new eui.Group();
		this.sc0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.width = 80;
		t.x = 125;
		t.y = 13;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.sc_icon0_i(),this._Image5_i(),this.sc_count0_i(),this.sc_buff0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,15,0,0);
		t.source = "wddx_bg_002";
		t.verticalCenter = -16;
		t.width = 80;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 24;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,0,0,30);
		t.source = "wddx_bg_002";
		t.width = 80;
		return t;
	};
	_proto.sc_icon0_i = function () {
		var t = new eui.Image();
		this.sc_icon0 = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "icon_1_4001";
		t.verticalCenter = -16;
		t.width = 80;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 26;
		t.height = 20;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,0,0,30);
		t.source = "wddx_bg_040";
		t.width = 80;
		return t;
	};
	_proto.sc_count0_i = function () {
		var t = new eui.Label();
		this.sc_count0 = t;
		t.bold = true;
		t.bottom = 26;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -0.5;
		t.size = 18;
		t.text = "x19";
		t.textAlign = "center";
		t.textColor = 0x6fff00;
		return t;
	};
	_proto.sc_buff0_i = function () {
		var t = new eui.Label();
		this.sc_buff0 = t;
		t.bottom = 3;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 1;
		t.size = 20;
		t.text = "x19";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		return t;
	};
	_proto.sc1_i = function () {
		var t = new eui.Group();
		this.sc1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.width = 80;
		t.x = 227.25;
		t.y = 13;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this.sc_icon1_i(),this._Image8_i(),this.sc_count1_i(),this.sc_buff1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,15,0,0);
		t.source = "wddx_bg_002";
		t.verticalCenter = -16;
		t.width = 80;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 24;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,0,0,30);
		t.source = "wddx_bg_002";
		t.width = 80;
		return t;
	};
	_proto.sc_icon1_i = function () {
		var t = new eui.Image();
		this.sc_icon1 = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "icon_1_4002";
		t.verticalCenter = -16;
		t.width = 80;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 26;
		t.height = 20;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,0,0,30);
		t.source = "wddx_bg_040";
		t.width = 80;
		return t;
	};
	_proto.sc_count1_i = function () {
		var t = new eui.Label();
		this.sc_count1 = t;
		t.bold = true;
		t.bottom = 26;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -0.5;
		t.size = 18;
		t.text = "x19";
		t.textAlign = "center";
		t.textColor = 0x6fff00;
		return t;
	};
	_proto.sc_buff1_i = function () {
		var t = new eui.Label();
		this.sc_buff1 = t;
		t.bottom = 3;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "x19";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.x = 81.75;
		t.y = 80;
		return t;
	};
	_proto.sc2_i = function () {
		var t = new eui.Group();
		this.sc2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.width = 80;
		t.x = 329.5;
		t.y = 13;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this.sc_icon2_i(),this._Image11_i(),this.sc_count2_i(),this.sc_buff2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,15,0,0);
		t.source = "wddx_bg_002";
		t.verticalCenter = -16;
		t.width = 80;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 24;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,0,0,30);
		t.source = "wddx_bg_002";
		t.width = 80;
		return t;
	};
	_proto.sc_icon2_i = function () {
		var t = new eui.Image();
		this.sc_icon2 = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "icon_1_4003";
		t.verticalCenter = -16;
		t.width = 80;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 26;
		t.height = 20;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,0,0,30);
		t.source = "wddx_bg_040";
		t.width = 80;
		return t;
	};
	_proto.sc_count2_i = function () {
		var t = new eui.Label();
		this.sc_count2 = t;
		t.bold = true;
		t.bottom = 26;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -0.5;
		t.size = 18;
		t.text = "x19";
		t.textAlign = "center";
		t.textColor = 0x6fff00;
		return t;
	};
	_proto.sc_buff2_i = function () {
		var t = new eui.Label();
		this.sc_buff2 = t;
		t.bottom = 3;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 1;
		t.size = 20;
		t.text = "x19";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		return t;
	};
	_proto.sc3_i = function () {
		var t = new eui.Group();
		this.sc3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.width = 80;
		t.x = 431.75;
		t.y = 13;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this.sc_icon3_i(),this._Image14_i(),this.sc_count3_i(),this.sc_buff3_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,15,0,0);
		t.source = "wddx_bg_002";
		t.verticalCenter = -16;
		t.width = 80;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 24;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,0,0,30);
		t.source = "wddx_bg_002";
		t.width = 80;
		return t;
	};
	_proto.sc_icon3_i = function () {
		var t = new eui.Image();
		this.sc_icon3 = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "icon_1_4004";
		t.verticalCenter = -16;
		t.width = 80;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 26;
		t.height = 20;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,0,0,30);
		t.source = "wddx_bg_040";
		t.width = 80;
		return t;
	};
	_proto.sc_count3_i = function () {
		var t = new eui.Label();
		this.sc_count3 = t;
		t.bold = true;
		t.bottom = 26;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -0.5;
		t.size = 18;
		t.text = "x19";
		t.textAlign = "center";
		t.textColor = 0x6fff00;
		return t;
	};
	_proto.sc_buff3_i = function () {
		var t = new eui.Label();
		this.sc_buff3 = t;
		t.bottom = 3;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 1;
		t.size = 20;
		t.text = "x19";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		return t;
	};
	_proto.sc4_i = function () {
		var t = new eui.Group();
		this.sc4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.width = 80;
		t.x = 534;
		t.y = 13;
		t.elementsContent = [this._Image15_i(),this._Image16_i(),this.sc_icon4_i(),this._Image17_i(),this.sc_count4_i(),this.sc_buff4_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,15,0,0);
		t.source = "wddx_bg_002";
		t.verticalCenter = -16;
		t.width = 80;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 24;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,0,0,30);
		t.source = "wddx_bg_002";
		t.width = 80;
		return t;
	};
	_proto.sc_icon4_i = function () {
		var t = new eui.Image();
		this.sc_icon4 = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.source = "icon_1_4005";
		t.verticalCenter = -16;
		t.width = 80;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 26;
		t.height = 20;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,0,0,30);
		t.source = "wddx_bg_040";
		t.width = 80;
		return t;
	};
	_proto.sc_count4_i = function () {
		var t = new eui.Label();
		this.sc_count4 = t;
		t.bold = true;
		t.bottom = 26;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -0.5;
		t.size = 18;
		t.text = "x19";
		t.textAlign = "center";
		t.textColor = 0x6fff00;
		return t;
	};
	_proto.sc_buff4_i = function () {
		var t = new eui.Label();
		this.sc_buff4 = t;
		t.bottom = 3;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 1;
		t.size = 20;
		t.text = "x19";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		return t;
	};
	_proto.lingquBtn_i = function () {
		var t = new MyButton();
		this.lingquBtn = t;
		t.height = 110;
		t.label = "ProCollect_7";
		t.visible = false;
		t.x = 442;
		t.y = 0;
		t.skinName = CollectListItemSkin$Skin26;
		return t;
	};
	return CollectListItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/CollectListView.exml'] = window.CollectListViewSkin = (function (_super) {
	__extends(CollectListViewSkin, _super);
	function CollectListViewSkin() {
		_super.call(this);
		this.skinParts = ["www_231","www_232","www_233","www_234","www_235","container"];
		
		this.height = 318;
		this.width = 640;
		this.elementsContent = [this._Group1_i(),this._Scroller1_i()];
	}
	var _proto = CollectListViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.cacheAsBitmap = true;
		t.height = 24;
		t.percentWidth = 100;
		t.x = 0;
		t.y = -6;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.www_231_i(),this.www_232_i(),this.www_233_i(),this.www_234_i(),this.www_235_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 28;
		t.scale9Grid = new egret.Rectangle(13,3,4,5);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_022";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 27;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_041";
		t.width = 56;
		t.x = 33;
		t.y = -1;
		return t;
	};
	_proto.www_231_i = function () {
		var t = new eui.Label();
		this.www_231 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "ProCollect_1";
		t.textColor = 0xffea00;
		t.x = 122;
		t.y = 2;
		return t;
	};
	_proto.www_232_i = function () {
		var t = new eui.Label();
		this.www_232 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "ProCollect_2";
		t.textColor = 0xFFEA00;
		t.x = 223.75;
		t.y = 3;
		return t;
	};
	_proto.www_233_i = function () {
		var t = new eui.Label();
		this.www_233 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "ProCollect_3";
		t.textColor = 0xFFEA00;
		t.x = 326.5;
		t.y = 3;
		return t;
	};
	_proto.www_234_i = function () {
		var t = new eui.Label();
		this.www_234 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "ProCollect_4";
		t.textColor = 0xFFEA00;
		t.x = 428.25;
		t.y = 5;
		return t;
	};
	_proto.www_235_i = function () {
		var t = new eui.Label();
		this.www_235 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "ProCollect_5";
		t.textColor = 0xFFEA00;
		t.x = 531;
		t.y = 5;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 291;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 23;
		t.viewport = this.container_i();
		return t;
	};
	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.cacheAsBitmap = true;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		t.paddingTop = 8;
		return t;
	};
	return CollectListViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/GamePanel.exml'] = window.GamePanelSkin = (function (_super) {
	__extends(GamePanelSkin, _super);
	var GamePanelSkin$Skin27 = 	(function (_super) {
		__extends(GamePanelSkin$Skin27, _super);
		function GamePanelSkin$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 92;
			this.width = 90;
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 43;
			t.anchorOffsetY = 43;
			t.source = "wddx_bt_012";
			t.x = 45;
			t.y = 44;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "wddx_ft_005";
			t.verticalCenter = 30;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bottom = 0;
			t.fontFamily = "Microsoft YaHei";
			t.size = 22;
			t.stroke = 2;
			t.strokeColor = 0x000000;
			t.text = "";
			t.x = 23;
			return t;
		};
		return GamePanelSkin$Skin27;
	})(eui.Skin);

	var GamePanelSkin$Skin28 = 	(function (_super) {
		__extends(GamePanelSkin$Skin28, _super);
		function GamePanelSkin$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "wddx_bt_025";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "wddx_ft_004";
			t.y = 80.97;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bottom = -21;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 22;
			t.stroke = 2;
			t.strokeColor = 0x000000;
			return t;
		};
		return GamePanelSkin$Skin28;
	})(eui.Skin);

	var GamePanelSkin$Skin29 = 	(function (_super) {
		__extends(GamePanelSkin$Skin29, _super);
		function GamePanelSkin$Skin29() {
			_super.call(this);
			this.skinParts = ["iconDisplay","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.iconDisplay_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wddx_ic_032";
			t.percentWidth = 100;
			return t;
		};
		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.horizontalCenter = 35;
			t.source = "wddx_red_point";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 20;
			t.textColor = 0xffffff;
			t.verticalCenter = 14;
			return t;
		};
		return GamePanelSkin$Skin29;
	})(eui.Skin);

	var GamePanelSkin$Skin30 = 	(function (_super) {
		__extends(GamePanelSkin$Skin30, _super);
		function GamePanelSkin$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GamePanelSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 42.5;
			t.anchorOffsetY = 30;
			t.height = 86;
			t.source = "wddx_bt_026";
			t.width = 85;
			t.x = 50;
			t.y = 30;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 25;
			t.horizontalCenter = 40;
			t.source = "wddx_red_point";
			t.verticalCenter = -40;
			t.width = 24;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "wddx_ft_006";
			t.verticalCenter = 36;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GamePanelSkin$Skin30;
	})(eui.Skin);

	function GamePanelSkin() {
		_super.call(this);
		this.skinParts = ["battle","middle","baoxiang1","baoxiang","ore1","ore2","ore3","baoxiangGroup","magicStateContainer","currentBloodSlider","www_17","currentBloodValueLabel","clickDpsLabel","autoDpsLabel","class10Btn","moveBtn1","moveBtn0","sellBusinessBtn","container","backBtn","ballVeiw","zhuanshiBtn","jinbiBtn","zhuanpanBtn","huishouBtn","sevenSignBtn","vipBtn","inviteBtn","toggleGroup","aniAdCon1","aniAdCon0","tryListCon","tryCon","hotCon","bottom","currentVipLevel","top","goldContainer"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.middle_i(),this.baoxiangGroup_i(),this.bottom_i(),this.top_i(),this.goldContainer_i()];
	}
	var _proto = GamePanelSkin.prototype;

	_proto.middle_i = function () {
		var t = new eui.Group();
		this.middle = t;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this.battle_i()];
		return t;
	};
	_proto.battle_i = function () {
		var t = new BattleModel();
		this.battle = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 1.52;
		t.y = 0;
		return t;
	};
	_proto.baoxiangGroup_i = function () {
		var t = new eui.Group();
		this.baoxiangGroup = t;
		t.anchorOffsetY = 0;
		t.bottom = 696;
		t.height = 200;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.elementsContent = [this.baoxiang1_i(),this.baoxiang_i(),this.ore1_i(),this.ore2_i(),this.ore3_i()];
		return t;
	};
	_proto.baoxiang1_i = function () {
		var t = new eui.Group();
		this.baoxiang1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 96;
		t.x = 275;
		t.y = 25;
		return t;
	};
	_proto.baoxiang_i = function () {
		var t = new eui.Image();
		this.baoxiang = t;
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 51;
		t.height = 103;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bao_001";
		t.touchEnabled = false;
		t.visible = false;
		t.width = 111;
		t.x = 533;
		t.y = 220;
		return t;
	};
	_proto.ore1_i = function () {
		var t = new eui.Image();
		this.ore1 = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.touchEnabled = false;
		t.visible = false;
		t.width = 50;
		t.x = 193;
		t.y = 238;
		return t;
	};
	_proto.ore2_i = function () {
		var t = new eui.Image();
		this.ore2 = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.touchEnabled = false;
		t.visible = false;
		t.width = 50;
		t.x = 361;
		t.y = 264;
		return t;
	};
	_proto.ore3_i = function () {
		var t = new eui.Image();
		this.ore3 = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.touchEnabled = false;
		t.visible = false;
		t.width = 50;
		t.x = 494;
		t.y = 235;
		return t;
	};
	_proto.bottom_i = function () {
		var t = new eui.Group();
		this.bottom = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this.container_i(),this.backBtn_i(),this.ballVeiw_i(),this.zhuanshiBtn_i(),this.jinbiBtn_i(),this.zhuanpanBtn_i(),this.huishouBtn_i(),this.sevenSignBtn_i(),this.vipBtn_i(),this.inviteBtn_i(),this.toggleGroup_i(),this.aniAdCon1_i(),this.aniAdCon0_i(),this.tryListCon_i(),this.tryCon_i(),this.hotCon_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 504.67;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(5,5,30,30);
		t.source = "wddx_bg_006";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 54;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(5,10,10,3);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_003";
		t.percentWidth = 100;
		t.x = 10;
		t.y = 9.929999999999836;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 440;
		t.height = 62;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.magicStateContainer_i(),this.currentBloodSlider_i(),this.www_17_i(),this.currentBloodValueLabel_i(),this.clickDpsLabel_i(),this.autoDpsLabel_i(),this.class10Btn_i(),this.moveBtn1_i(),this.moveBtn0_i(),this.sellBusinessBtn_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 68.67;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(5,10,10,3);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_003";
		t.percentWidth = 100;
		t.x = 0;
		t.y = -0.07000000000016371;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 13;
		t.height = 46;
		t.horizontalCenter = 27;
		t.scale9Grid = new egret.Rectangle(13,12,5,5);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_001";
		t.width = 322;
		t.x = 186;
		t.y = 7.929999999999836;
		return t;
	};
	_proto.magicStateContainer_i = function () {
		var t = new eui.Group();
		this.magicStateContainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.width = 268;
		t.x = 231.35;
		t.y = 8.2;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "icon_1001";
		t.x = 1;
		t.y = 737;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "icon_1005";
		t.x = 41;
		t.y = 777;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "icon_1003";
		t.x = 21;
		t.y = 757;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "icon_1002";
		t.x = 31;
		t.y = 767;
		return t;
	};
	_proto.currentBloodSlider_i = function () {
		var t = new eui.HSlider();
		this.currentBloodSlider = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 73;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "bloodSliderSkin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 350;
		t.x = 171;
		t.y = -26.070000000000164;
		return t;
	};
	_proto.www_17_i = function () {
		var t = new eui.Label();
		this.www_17 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "ProGame_1";
		t.x = 189.33000000000004;
		t.y = 17.58;
		return t;
	};
	_proto.currentBloodValueLabel_i = function () {
		var t = new eui.Label();
		this.currentBloodValueLabel = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.stroke = 2;
		t.text = "99999";
		t.y = -40.42;
		return t;
	};
	_proto.clickDpsLabel_i = function () {
		var t = new eui.Label();
		this.clickDpsLabel = t;
		t.bold = true;
		t.bottom = 42;
		t.fontFamily = "Microsoft YaHei";
		t.left = 11;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "ProGame_2";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.x = 13;
		t.y = 9.92999999999995;
		return t;
	};
	_proto.autoDpsLabel_i = function () {
		var t = new eui.Label();
		this.autoDpsLabel = t;
		t.bold = true;
		t.bottom = 13;
		t.fontFamily = "Microsoft YaHei";
		t.left = 11;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "ProGame_3";
		t.textAlign = "left";
		t.textColor = 0xfcc111;
		t.verticalAlign = "middle";
		t.x = 13;
		t.y = 32.929999999999836;
		return t;
	};
	_proto.class10Btn_i = function () {
		var t = new MyButton();
		this.class10Btn = t;
		t.label = "ProGame_4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "button3Skin";
		t.x = 519;
		t.y = 1;
		return t;
	};
	_proto.moveBtn1_i = function () {
		var t = new MyButton();
		this.moveBtn1 = t;
		t.anchorOffsetX = 0;
		t.label = "<<";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "button3Skin";
		t.width = 59;
		t.x = 520;
		t.y = 2;
		return t;
	};
	_proto.moveBtn0_i = function () {
		var t = new MyButton();
		this.moveBtn0 = t;
		t.anchorOffsetX = 0;
		t.label = ">>";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "button3Skin";
		t.width = 62;
		t.x = 577;
		t.y = 2;
		return t;
	};
	_proto.sellBusinessBtn_i = function () {
		var t = new MyButton();
		this.sellBusinessBtn = t;
		t.label = "ProGame_5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "button3Skin";
		t.x = 521;
		t.y = 1;
		return t;
	};
	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 116;
		t.height = 318;
		t.horizontalCenter = 0;
		t.width = 640;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new MyButton();
		this.backBtn = t;
		t.bottom = 513;
		t.height = 83;
		t.label = "Button";
		t.left = 8;
		t.skinName = "button1Skin";
		t.width = 83;
		return t;
	};
	_proto.ballVeiw_i = function () {
		var t = new BallVeiw();
		this.ballVeiw = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.left = 7;
		t.top = 53;
		t.width = 201;
		return t;
	};
	_proto.zhuanshiBtn_i = function () {
		var t = new ResourceBtn();
		this.zhuanshiBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.icon = "wddx_ic_005";
		t.label = "99999";
		t.left = 11;
		t.top = 186;
		t.type = "jewel";
		t.width = 175;
		return t;
	};
	_proto.jinbiBtn_i = function () {
		var t = new ResourceBtn();
		this.jinbiBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.icon = "wddx_ic_004";
		t.label = "99999";
		t.left = 9;
		t.top = 135;
		t.width = 191;
		return t;
	};
	_proto.zhuanpanBtn_i = function () {
		var t = new MyButton();
		this.zhuanpanBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 638;
		t.icon = "wddx_bt_012";
		t.label = "";
		t.right = 10;
		t.skinName = GamePanelSkin$Skin27;
		return t;
	};
	_proto.huishouBtn_i = function () {
		var t = new MyButton();
		this.huishouBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 518;
		t.icon = "wddx_bt_011";
		t.label = "";
		t.right = 0;
		t.skinName = GamePanelSkin$Skin28;
		return t;
	};
	_proto.sevenSignBtn_i = function () {
		var t = new SevenSignButton();
		this.sevenSignBtn = t;
		t.bottom = 747;
		t.height = 77;
		t.icon = "wddx_qd_01";
		t.label = "Button";
		t.right = 20;
		t.width = 75;
		return t;
	};
	_proto.vipBtn_i = function () {
		var t = new SevenSignButton();
		this.vipBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 839;
		t.height = 85;
		t.icon = "wddx_red_point";
		t.label = "";
		t.right = 1;
		t.visible = false;
		t.width = 116;
		t.skinName = GamePanelSkin$Skin29;
		return t;
	};
	_proto.inviteBtn_i = function () {
		var t = new MyButton();
		this.inviteBtn = t;
		t.bottom = 603;
		t.icon = "wddx_bt_001";
		t.label = "";
		t.left = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 100;
		t.skinName = GamePanelSkin$Skin30;
		return t;
	};
	_proto.toggleGroup_i = function () {
		var t = new ToggleBtnGroup();
		this.toggleGroup = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 1025;
		return t;
	};
	_proto.aniAdCon1_i = function () {
		var t = new eui.Group();
		this.aniAdCon1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 1006;
		t.height = 30;
		t.right = 66;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 30;
		return t;
	};
	_proto.aniAdCon0_i = function () {
		var t = new eui.Group();
		this.aniAdCon0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.horizontalCenter = -92;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 30;
		t.x = 10;
		t.y = 56.08;
		return t;
	};
	_proto.tryListCon_i = function () {
		var t = new eui.Group();
		this.tryListCon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 30;
		return t;
	};
	_proto.tryCon_i = function () {
		var t = new eui.Group();
		this.tryCon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 30;
		t.x = 10;
		t.y = 330;
		return t;
	};
	_proto.hotCon_i = function () {
		var t = new eui.Group();
		this.hotCon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 30;
		t.x = 20;
		t.y = 326;
		return t;
	};
	_proto.top_i = function () {
		var t = new eui.Group();
		this.top = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this.currentVipLevel_i()];
		return t;
	};
	_proto.currentVipLevel_i = function () {
		var t = new eui.Image();
		this.currentVipLevel = t;
		t.height = 26.400000000000002;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ft_011";
		t.touchEnabled = false;
		t.width = 77.60000000000001;
		t.x = 4.03;
		t.y = 115.22;
		return t;
	};
	_proto.goldContainer_i = function () {
		var t = new eui.Group();
		this.goldContainer = t;
		t.bottom = 636;
		t.height = 500;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.percentWidth = 100;
		return t;
	};
	return GamePanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/HitHitPanel.exml'] = window.HitHitPanelSkin = (function (_super) {
	__extends(HitHitPanelSkin, _super);
	function HitHitPanelSkin() {
		_super.call(this);
		this.skinParts = ["hit","mostHit"];
		
		this.height = 70;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.hit_i(),this.mostHit_i()];
	}
	var _proto = HitHitPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "zuigao";
		t.touchEnabled = false;
		t.x = 375;
		t.y = 1;
		return t;
	};
	_proto.hit_i = function () {
		var t = new eui.BitmapLabel();
		this.hit = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "comb_click_fnt";
		t.letterSpacing = -5;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.text = "30";
		t.textAlign = "right";
		t.touchEnabled = false;
		t.width = 409.22;
		t.x = 277;
		t.y = 2;
		return t;
	};
	_proto.mostHit_i = function () {
		var t = new eui.BitmapLabel();
		this.mostHit = t;
		t.anchorOffsetX = 0;
		t.font = "comb_click_fnt";
		t.letterSpacing = -5;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.text = "0";
		t.touchEnabled = false;
		t.x = 498;
		t.y = 37;
		return t;
	};
	return HitHitPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/HitMostPanel.exml'] = window.HitMostPanelSkin = (function (_super) {
	__extends(HitMostPanelSkin, _super);
	var HitMostPanelSkin$Skin31 = 	(function (_super) {
		__extends(HitMostPanelSkin$Skin31, _super);
		function HitMostPanelSkin$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HitMostPanelSkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(21,59,0,6);
			t.source = "wddx_bt_002";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 40;
			t.textColor = 0x34630c;
			t.verticalCenter = 0;
			return t;
		};
		return HitMostPanelSkin$Skin31;
	})(eui.Skin);

	var HitMostPanelSkin$Skin32 = 	(function (_super) {
		__extends(HitMostPanelSkin$Skin32, _super);
		function HitMostPanelSkin$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HitMostPanelSkin$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wddx_bt_005";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HitMostPanelSkin$Skin32;
	})(eui.Skin);

	function HitMostPanelSkin() {
		_super.call(this);
		this.skinParts = ["runBg","www_242","hitmostTxt","shareBtn","closeBtn","aniAdCon1","aniAdCon0"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = HitMostPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 688;
		t.horizontalCenter = 0;
		t.verticalCenter = -14;
		t.width = 636;
		t.elementsContent = [this._Image1_i(),this.runBg_i(),this._Image2_i(),this.www_242_i(),this.hitmostTxt_i(),this.shareBtn_i(),this.closeBtn_i(),this.aniAdCon1_i(),this.aniAdCon0_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 12.5;
		t.scale9Grid = new egret.Rectangle(45,0,0,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lianji_png";
		t.y = -98.81;
		return t;
	};
	_proto.runBg_i = function () {
		var t = new eui.Image();
		this.runBg = t;
		t.anchorOffsetX = 381.5;
		t.anchorOffsetY = 332.5;
		t.horizontalCenter = 0.5;
		t.source = "wddx_light_001_png";
		t.verticalCenter = 99.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 123.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hits";
		t.verticalCenter = 152;
		t.x = 271;
		return t;
	};
	_proto.www_242_i = function () {
		var t = new eui.Label();
		this.www_242 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -21;
		t.fontFamily = "Microsoft YaHei";
		t.height = 33.03;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "ProHitMonster_1";
		t.textAlign = "center";
		t.width = 481.58;
		return t;
	};
	_proto.hitmostTxt_i = function () {
		var t = new eui.BitmapLabel();
		this.hitmostTxt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "comb_click_fnt";
		t.horizontalCenter = -2;
		t.letterSpacing = -8;
		t.text = "0";
		t.textAlign = "center";
		t.verticalCenter = 101.5;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new MyButton();
		this.shareBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -157;
		t.height = 119;
		t.horizontalCenter = -1;
		t.label = "ProHitMonster_2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 246;
		t.skinName = HitMostPanelSkin$Skin31;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.label = "";
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = -68;
		t.skinName = HitMostPanelSkin$Skin32;
		return t;
	};
	_proto.aniAdCon1_i = function () {
		var t = new eui.Group();
		this.aniAdCon1 = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 30;
		t.x = 603;
		t.y = 200;
		return t;
	};
	_proto.aniAdCon0_i = function () {
		var t = new eui.Group();
		this.aniAdCon0 = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 30;
		t.x = 0;
		t.y = 200;
		return t;
	};
	return HitMostPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/HowToPlay.exml'] = window.HowToPlaySkin = (function (_super) {
	__extends(HowToPlaySkin, _super);
	var HowToPlaySkin$Skin33 = 	(function (_super) {
		__extends(HowToPlaySkin$Skin33, _super);
		function HowToPlaySkin$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HowToPlaySkin$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(19,25,0,3);
			t.source = "wddx_bt_001";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 30;
			t.textColor = 0xa22c11;
			t.verticalCenter = 0;
			return t;
		};
		return HowToPlaySkin$Skin33;
	})(eui.Skin);

	function HowToPlaySkin() {
		_super.call(this);
		this.skinParts = ["closeBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.closeBtn_i()];
	}
	var _proto = HowToPlaySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "zmw_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.horizontalCenter = 189;
		t.label = "HowToplay_1>>";
		t.verticalCenter = 513.5;
		t.width = 198;
		t.skinName = HowToPlaySkin$Skin33;
		return t;
	};
	return HowToPlaySkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/LiXianPanel.exml'] = window.LiXianPanelSkin = (function (_super) {
	__extends(LiXianPanelSkin, _super);
	var LiXianPanelSkin$Skin34 = 	(function (_super) {
		__extends(LiXianPanelSkin$Skin34, _super);
		function LiXianPanelSkin$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LiXianPanelSkin$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wddx_bt_005";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LiXianPanelSkin$Skin34;
	})(eui.Skin);

	var LiXianPanelSkin$Skin35 = 	(function (_super) {
		__extends(LiXianPanelSkin$Skin35, _super);
		function LiXianPanelSkin$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LiXianPanelSkin$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(19,9,0,79);
			t.source = "wddx_bt_006";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = -1.5;
			t.size = 32;
			t.text = "";
			t.textColor = 0x524e4e;
			t.verticalCenter = -5;
			return t;
		};
		return LiXianPanelSkin$Skin35;
	})(eui.Skin);

	var LiXianPanelSkin$Skin36 = 	(function (_super) {
		__extends(LiXianPanelSkin$Skin36, _super);
		function LiXianPanelSkin$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LiXianPanelSkin$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(19,9,0,61);
			t.source = "wddx_bt_007";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = -1.5;
			t.size = 32;
			t.text = "";
			t.verticalCenter = -5;
			return t;
		};
		return LiXianPanelSkin$Skin36;
	})(eui.Skin);

	function LiXianPanelSkin() {
		_super.call(this);
		this.skinParts = ["www_60","zhuanpanGroup","lixianGold","zhizhen","www_66","closeBtn","getBtn","againBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group9_i()];
	}
	var _proto = LiXianPanelSkin.prototype;

	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 200;
		t.height = 936;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.www_60_i(),this._Image3_i(),this.zhuanpanGroup_i(),this.zhizhen_i(),this.www_66_i(),this.closeBtn_i(),this.getBtn_i(),this.againBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 852;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(184,69,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0012";
		t.width = 560;
		t.y = 82;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(45,0,0,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0014";
		t.width = 274;
		t.y = 91.83;
		return t;
	};
	_proto.www_60_i = function () {
		var t = new eui.Label();
		this.www_60 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 36;
		t.text = "LiXian_1";
		t.x = 246.34;
		t.y = 104.67;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "wddx_bg_030_png";
		t.verticalCenter = 7;
		return t;
	};
	_proto.zhuanpanGroup_i = function () {
		var t = new eui.Group();
		this.zhuanpanGroup = t;
		t.anchorOffsetX = 269.5;
		t.anchorOffsetY = 269.5;
		t.height = 539;
		t.width = 539;
		t.x = 320.5;
		t.y = 466.5;
		t.elementsContent = [this._Image4_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 280;
		t.anchorOffsetY = 280;
		t.height = 560;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "wddx_bg_032_png";
		t.width = 560;
		t.x = 268.67;
		t.y = 270;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.67;
		t.width = 57.33;
		t.x = 245.03;
		t.y = 19.82;
		t.elementsContent = [this._Image5_i(),this._Label1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -0.16499999999999915;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_004";
		t.y = 56;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 2;
		t.strokeColor = 0x0C6C86;
		t.text = "x 1";
		t.textColor = 0xFFFFFF;
		t.y = 6.67;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.67;
		t.rotation = 45;
		t.width = 57.33;
		t.x = 431.01;
		t.y = 79.15;
		t.elementsContent = [this._Image6_i(),this._Label2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -0.16499999999999915;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_004";
		t.y = 56;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 2;
		t.strokeColor = 0x0C6C86;
		t.text = "x 2";
		t.textColor = 0xFFFFFF;
		t.y = 6.67;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.67;
		t.rotation = 90;
		t.width = 57.33;
		t.x = 518.35;
		t.y = 249.13;
		t.elementsContent = [this._Image7_i(),this._Label3_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -0.16499999999999915;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_004";
		t.y = 56;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 2;
		t.strokeColor = 0x0C6C86;
		t.text = "x 3";
		t.textColor = 0xFFFFFF;
		t.y = 6.67;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.67;
		t.rotation = 135;
		t.width = 57.33;
		t.x = 460.34;
		t.y = 431.12;
		t.elementsContent = [this._Image8_i(),this._Label4_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -0.16499999999999915;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_004";
		t.y = 56;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 2;
		t.strokeColor = 0x0C6C86;
		t.text = "x 4";
		t.textColor = 0xFFFFFF;
		t.y = 6.67;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.67;
		t.rotation = 180;
		t.width = 57.33;
		t.x = 294.34;
		t.y = 518.43;
		t.elementsContent = [this._Image9_i(),this._Label5_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -0.16499999999999915;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_004";
		t.y = 56;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 2;
		t.strokeColor = 0x0C6C86;
		t.text = "x 5";
		t.textColor = 0xFFFFFF;
		t.y = 6.67;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.67;
		t.rotation = 225;
		t.width = 57.33;
		t.x = 112.37;
		t.y = 464.41;
		t.elementsContent = [this._Image10_i(),this._Label6_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -0.16499999999999915;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_004";
		t.y = 56;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 2;
		t.strokeColor = 0x0C6C86;
		t.text = "x 6";
		t.textColor = 0xFFFFFF;
		t.y = 6.67;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.67;
		t.rotation = 270;
		t.width = 57.33;
		t.x = 21.03;
		t.y = 294.39;
		t.elementsContent = [this._Image11_i(),this._Label7_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -0.16499999999999915;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_004";
		t.y = 56;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 2;
		t.strokeColor = 0x0C6C86;
		t.text = "x 7";
		t.textColor = 0xFFFFFF;
		t.y = 6.67;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.67;
		t.rotation = 315;
		t.width = 57.33;
		t.x = 76.37;
		t.y = 109.73;
		t.elementsContent = [this._Image12_i(),this._Label8_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -0.16499999999999915;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_004";
		t.y = 56;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.stroke = 2;
		t.strokeColor = 0x0C6C86;
		t.text = "x 8";
		t.textColor = 0xFFFFFF;
		t.y = 6.67;
		return t;
	};
	_proto.zhizhen_i = function () {
		var t = new eui.Group();
		this.zhizhen = t;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.horizontalCenter = 1;
		t.verticalCenter = -29;
		t.width = 200;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this.lixianGold_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "wddx_bt_013";
		t.verticalCenter = 0;
		t.width = 159;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.horizontalCenter = 0;
		t.rotation = 0.95;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_004";
		t.width = 55;
		t.y = 75.95;
		return t;
	};
	_proto.lixianGold_i = function () {
		var t = new eui.Label();
		this.lixianGold = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30.67;
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x841000;
		t.text = "999999";
		t.textAlign = "center";
		t.width = 331.67;
		t.y = 136.98;
		return t;
	};
	_proto.www_66_i = function () {
		var t = new eui.Label();
		this.www_66 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "LiXian_6";
		t.x = 197.66;
		t.y = 760.01;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 537.99;
		t.y = 95.97;
		t.skinName = LiXianPanelSkin$Skin34;
		return t;
	};
	_proto.getBtn_i = function () {
		var t = new MyButton();
		this.getBtn = t;
		t.anchorOffsetX = 0;
		t.height = 79;
		t.label = "LiXian_7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 182;
		t.x = 93.33;
		t.y = 820.63;
		t.skinName = LiXianPanelSkin$Skin35;
		return t;
	};
	_proto.againBtn_i = function () {
		var t = new MyButton();
		this.againBtn = t;
		t.anchorOffsetX = 0;
		t.label = "LiXian_8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 182;
		t.x = 359.31;
		t.y = 820.63;
		t.skinName = LiXianPanelSkin$Skin36;
		return t;
	};
	return LiXianPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/LuckyZhuanPan.exml'] = window.LuckyZhuanPanSkin = (function (_super) {
	__extends(LuckyZhuanPanSkin, _super);
	var LuckyZhuanPanSkin$Skin37 = 	(function (_super) {
		__extends(LuckyZhuanPanSkin$Skin37, _super);
		function LuckyZhuanPanSkin$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LuckyZhuanPanSkin$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wddx_bt_020";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LuckyZhuanPanSkin$Skin37;
	})(eui.Skin);

	var LuckyZhuanPanSkin$Skin38 = 	(function (_super) {
		__extends(LuckyZhuanPanSkin$Skin38, _super);
		function LuckyZhuanPanSkin$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LuckyZhuanPanSkin$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wddx_bt_021";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LuckyZhuanPanSkin$Skin38;
	})(eui.Skin);

	var LuckyZhuanPanSkin$Skin39 = 	(function (_super) {
		__extends(LuckyZhuanPanSkin$Skin39, _super);
		function LuckyZhuanPanSkin$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LuckyZhuanPanSkin$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wddx_bt_005";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LuckyZhuanPanSkin$Skin39;
	})(eui.Skin);

	function LuckyZhuanPanSkin() {
		_super.call(this);
		this.skinParts = ["www_90","www_91","www_92","www_93","www_94","www_95","www_96","www_97","zhuanpanGroup","zhizhen","luckyIcon","zhizhenGroup","count","plusBtn","zhuanpanquan","startBtn","closeBtn","aniAdCon0","aniAdCon1"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.zhuanpanGroup_i(),this.zhizhenGroup_i(),this.zhuanpanquan_i(),this.startBtn_i(),this.closeBtn_i(),this.aniAdCon0_i(),this.aniAdCon1_i()];
	}
	var _proto = LuckyZhuanPanSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "wddx_bg_029_png";
		t.verticalCenter = -69.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "wddx_bg_030_png";
		t.verticalCenter = -86;
		return t;
	};
	_proto.zhuanpanGroup_i = function () {
		var t = new eui.Group();
		this.zhuanpanGroup = t;
		t.anchorOffsetX = 269.5;
		t.anchorOffsetY = 269.5;
		t.height = 539;
		t.horizontalCenter = 0.5;
		t.verticalCenter = -95.5;
		t.width = 539;
		t.elementsContent = [this._Image3_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 280;
		t.anchorOffsetY = 280;
		t.height = 560;
		t.horizontalCenter = 0;
		t.source = "wddx_bg_032_png";
		t.verticalCenter = 0;
		t.width = 560;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.width = 100;
		t.x = 220.88;
		t.y = -0.16;
		t.elementsContent = [this.www_90_i(),this._Image4_i()];
		return t;
	};
	_proto.www_90_i = function () {
		var t = new eui.Label();
		this.www_90 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 2;
		t.text = "LuckyZhuanPan_1";
		t.textAlign = "center";
		t.top = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0.5;
		t.source = "wddx_ic_004";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.rotation = 45;
		t.width = 100;
		t.x = 431.4;
		t.y = 47.8;
		t.elementsContent = [this.www_91_i(),this._Image5_i()];
		return t;
	};
	_proto.www_91_i = function () {
		var t = new eui.Label();
		this.www_91 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 2;
		t.text = "LuckyZhuanPan_2";
		t.textAlign = "center";
		t.top = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "wddx_ic_004";
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.rotation = 90;
		t.width = 100;
		t.x = 542.92;
		t.y = 235;
		t.elementsContent = [this.www_92_i(),this._Image6_i()];
		return t;
	};
	_proto.www_92_i = function () {
		var t = new eui.Label();
		this.www_92 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 2;
		t.text = "LuckyZhuanPan_3";
		t.textAlign = "center";
		t.top = 8;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "wddx_ic_004";
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.rotation = 135;
		t.width = 100;
		t.x = 491.32;
		t.y = 427.88;
		t.elementsContent = [this.www_93_i(),this._Image7_i()];
		return t;
	};
	_proto.www_93_i = function () {
		var t = new eui.Label();
		this.www_93 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 2;
		t.text = "LuckyZhuanPan_4";
		t.textAlign = "center";
		t.top = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "wddx_ic_016";
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.rotation = 180;
		t.width = 100;
		t.x = 327;
		t.y = 543.48;
		t.elementsContent = [this.www_94_i(),this._Image8_i()];
		return t;
	};
	_proto.www_94_i = function () {
		var t = new eui.Label();
		this.www_94 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 2;
		t.text = "LuckyZhuanPan_5";
		t.textAlign = "center";
		t.top = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 105;
		t.horizontalCenter = 0;
		t.source = "wddx_bao_001";
		t.width = 110;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.rotation = 225;
		t.width = 100;
		t.x = 122.44;
		t.y = 504.04;
		t.elementsContent = [this.www_95_i(),this._Image9_i()];
		return t;
	};
	_proto.www_95_i = function () {
		var t = new eui.Label();
		this.www_95 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 2;
		t.text = "LuckyZhuanPan_6";
		t.textAlign = "center";
		t.top = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "wddx_ic_016";
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.rotation = 270;
		t.width = 100;
		t.x = -0.68;
		t.y = 321;
		t.elementsContent = [this.www_96_i(),this._Image10_i()];
		return t;
	};
	_proto.www_96_i = function () {
		var t = new eui.Label();
		this.www_96 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 2;
		t.text = "LuckyZhuanPan_7";
		t.textAlign = "center";
		t.top = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "wddx_ic_004";
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.rotation = 315;
		t.width = 100;
		t.x = 51.4;
		t.y = 113.88;
		t.elementsContent = [this.www_97_i(),this._Image11_i()];
		return t;
	};
	_proto.www_97_i = function () {
		var t = new eui.Label();
		this.www_97 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 2;
		t.text = "LuckyZhuanPan_8";
		t.textAlign = "center";
		t.top = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "wddx_ic_016";
		return t;
	};
	_proto.zhizhenGroup_i = function () {
		var t = new eui.Group();
		this.zhizhenGroup = t;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = -115;
		t.width = 200;
		t.elementsContent = [this.zhizhen_i(),this.luckyIcon_i()];
		return t;
	};
	_proto.zhizhen_i = function () {
		var t = new eui.Image();
		this.zhizhen = t;
		t.anchorOffsetX = 280;
		t.anchorOffsetY = 280;
		t.height = 200;
		t.horizontalCenter = 0.5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "wddx_bt_013";
		t.verticalCenter = -6;
		t.width = 159;
		return t;
	};
	_proto.luckyIcon_i = function () {
		var t = new eui.Image();
		this.luckyIcon = t;
		t.horizontalCenter = 1;
		t.source = "wddx_ft_002";
		t.verticalCenter = 17;
		return t;
	};
	_proto.zhuanpanquan_i = function () {
		var t = new eui.Group();
		this.zhuanpanquan = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.horizontalCenter = -1;
		t.verticalCenter = 291.5;
		t.width = 310;
		t.elementsContent = [this._Image12_i(),this.count_i(),this.plusBtn_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = -2;
		t.source = "wddx_ic_128";
		t.top = -3;
		return t;
	};
	_proto.count_i = function () {
		var t = new eui.Label();
		this.count = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 3.5;
		t.size = 26;
		t.text = "LuckyZhuanPan_9x0";
		t.textAlign = "left";
		t.verticalCenter = 2.5;
		return t;
	};
	_proto.plusBtn_i = function () {
		var t = new MyButton();
		this.plusBtn = t;
		t.height = 68;
		t.label = "";
		t.right = 2;
		t.top = 2;
		t.width = 68;
		t.skinName = LuckyZhuanPanSkin$Skin37;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new MyButton();
		this.startBtn = t;
		t.horizontalCenter = 4.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 452.5;
		t.skinName = LuckyZhuanPanSkin$Skin38;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.label = "";
		t.right = 0;
		t.top = 93;
		t.skinName = LuckyZhuanPanSkin$Skin39;
		return t;
	};
	_proto.aniAdCon0_i = function () {
		var t = new eui.Group();
		this.aniAdCon0 = t;
		t.anchorOffsetY = 1;
		t.height = 100;
		t.left = 0;
		t.verticalCenter = 491;
		t.width = 100;
		return t;
	};
	_proto.aniAdCon1_i = function () {
		var t = new eui.Group();
		this.aniAdCon1 = t;
		t.anchorOffsetX = 1;
		t.anchorOffsetY = 1;
		t.height = 100;
		t.verticalCenter = 491;
		t.width = 100;
		t.x = 536;
		return t;
	};
	return LuckyZhuanPanSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/LuckyZhuanPanResult.exml'] = window.LuckyZhuanPanResultSkin = (function (_super) {
	__extends(LuckyZhuanPanResultSkin, _super);
	var LuckyZhuanPanResultSkin$Skin40 = 	(function (_super) {
		__extends(LuckyZhuanPanResultSkin$Skin40, _super);
		function LuckyZhuanPanResultSkin$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LuckyZhuanPanResultSkin$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(15,36,11,6);
			t.source = "wddx_bt_007";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.verticalCenter = -4;
			return t;
		};
		return LuckyZhuanPanResultSkin$Skin40;
	})(eui.Skin);

	var LuckyZhuanPanResultSkin$Skin41 = 	(function (_super) {
		__extends(LuckyZhuanPanResultSkin$Skin41, _super);
		function LuckyZhuanPanResultSkin$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LuckyZhuanPanResultSkin$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(15,36,11,6);
			t.source = "";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.text = "";
			t.verticalCenter = -4;
			return t;
		};
		return LuckyZhuanPanResultSkin$Skin41;
	})(eui.Skin);

	var LuckyZhuanPanResultSkin$Skin42 = 	(function (_super) {
		__extends(LuckyZhuanPanResultSkin$Skin42, _super);
		function LuckyZhuanPanResultSkin$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LuckyZhuanPanResultSkin$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(20,37,0,5);
			t.source = "wddx_bt_006";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.verticalCenter = -4;
			return t;
		};
		return LuckyZhuanPanResultSkin$Skin42;
	})(eui.Skin);

	var LuckyZhuanPanResultSkin$Skin43 = 	(function (_super) {
		__extends(LuckyZhuanPanResultSkin$Skin43, _super);
		function LuckyZhuanPanResultSkin$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LuckyZhuanPanResultSkin$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return LuckyZhuanPanResultSkin$Skin43;
	})(eui.Skin);

	function LuckyZhuanPanResultSkin() {
		_super.call(this);
		this.skinParts = ["bg3","bg0","bg1","titleTxt","resName","jiangliCount","beishuTxt","shoucangpinTxt","lingquBtn","lingquBtn1","lingquBtn2","closeBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = LuckyZhuanPanResultSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 600;
		t.horizontalCenter = 0;
		t.verticalCenter = 40;
		t.width = 600;
		t.elementsContent = [this.bg3_i(),this.bg0_i(),this.bg1_i(),this.titleTxt_i(),this.resName_i(),this.jiangliCount_i(),this.beishuTxt_i(),this.shoucangpinTxt_i(),this.lingquBtn_i(),this.lingquBtn1_i(),this.lingquBtn2_i(),this.closeBtn_i()];
		return t;
	};
	_proto.bg3_i = function () {
		var t = new eui.Image();
		this.bg3 = t;
		t.anchorOffsetY = 0;
		t.height = 508.33;
		t.scale9Grid = new egret.Rectangle(184,76,1,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0012";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg0_i = function () {
		var t = new eui.Image();
		this.bg0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.horizontalCenter = -1;
		t.scale9Grid = new egret.Rectangle(45,0,0,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0014";
		t.width = 320;
		t.y = 13.39;
		return t;
	};
	_proto.bg1_i = function () {
		var t = new eui.Image();
		this.bg1 = t;
		t.anchorOffsetY = 0;
		t.height = 248.67;
		t.horizontalCenter = 1;
		t.scale9Grid = new egret.Rectangle(19,16,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0013";
		t.verticalCenter = -62.5;
		t.width = 560;
		t.x = 58;
		return t;
	};
	_proto.titleTxt_i = function () {
		var t = new eui.Label();
		this.titleTxt = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "ResultZP_1";
		t.textAlign = "center";
		t.width = 184.12;
		t.x = 228;
		t.y = 29.08;
		return t;
	};
	_proto.resName_i = function () {
		var t = new eui.Image();
		this.resName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "wddx_ic_128";
		t.verticalCenter = -69;
		return t;
	};
	_proto.jiangliCount_i = function () {
		var t = new eui.Label();
		this.jiangliCount = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 38;
		t.horizontalCenter = 5.5;
		t.text = "ResultZP_2";
		t.textAlign = "center";
		t.verticalCenter = 33;
		return t;
	};
	_proto.beishuTxt_i = function () {
		var t = new eui.Label();
		this.beishuTxt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 38;
		t.horizontalCenter = 1.5;
		t.text = "ResultZP_3";
		t.textAlign = "center";
		t.verticalCenter = 87;
		t.visible = false;
		return t;
	};
	_proto.shoucangpinTxt_i = function () {
		var t = new eui.Label();
		this.shoucangpinTxt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "ResultZP_4";
		t.textAlign = "center";
		t.verticalCenter = 87;
		t.visible = false;
		return t;
	};
	_proto.lingquBtn_i = function () {
		var t = new MyButton();
		this.lingquBtn = t;
		t.anchorOffsetX = 0;
		t.bottom = 111;
		t.horizontalCenter = -0.5;
		t.label = "ResultZP_5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 165.33;
		t.skinName = LuckyZhuanPanResultSkin$Skin40;
		return t;
	};
	_proto.lingquBtn1_i = function () {
		var t = new MyButton();
		this.lingquBtn1 = t;
		t.anchorOffsetX = 0;
		t.bottom = 51;
		t.horizontalCenter = 0;
		t.label = "ResultZP_6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 140;
		t.skinName = LuckyZhuanPanResultSkin$Skin41;
		return t;
	};
	_proto.lingquBtn2_i = function () {
		var t = new MyButton();
		this.lingquBtn2 = t;
		t.anchorOffsetX = 0;
		t.bottom = 111;
		t.horizontalCenter = 0;
		t.label = "ResultZP_7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 140;
		t.skinName = LuckyZhuanPanResultSkin$Skin42;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 0;
		t.bottom = 49;
		t.horizontalCenter = 0.5;
		t.label = "ResultZP_8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 176.67;
		t.skinName = LuckyZhuanPanResultSkin$Skin43;
		return t;
	};
	return LuckyZhuanPanResultSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/MagicListItem.exml'] = window.MagicListItemSkin = (function (_super) {
	__extends(MagicListItemSkin, _super);
	function MagicListItemSkin() {
		_super.call(this);
		this.skinParts = ["adBtn","shareBtn","icon","timeLabel","countLabel","nameLabel"];
		
		this.height = 318;
		this.width = 154;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.adBtn_i(),this.shareBtn_i(),this.icon_i(),this.timeLabel_i(),this.countLabel_i(),this.nameLabel_i()];
	}
	var _proto = MagicListItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(15,11,1,2);
		t.source = "wddx_bg_004";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 36;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,15,0,0);
		t.source = "wddx_bg_002";
		t.top = 7;
		t.width = 134;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 120;
		t.horizontalCenter = 1;
		t.scale9Grid = new egret.Rectangle(15,15,0,0);
		t.source = "wddx_bg_002";
		t.verticalCenter = -45;
		t.width = 134;
		return t;
	};
	_proto.adBtn_i = function () {
		var t = new MyButton();
		this.adBtn = t;
		t.bottom = 8;
		t.horizontalCenter = 1;
		t.icon = "wddx_ic_014";
		t.label = "ProMagic_1";
		t.skinName = "button7Skin";
		t.width = 134;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new MyButton();
		this.shareBtn = t;
		t.bottom = 8;
		t.horizontalCenter = 1;
		t.icon = "wddx_ic_013";
		t.label = "ProMagic_2";
		t.skinName = "button7Skin";
		t.width = 134;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.height = 77;
		t.horizontalCenter = 1.5;
		t.source = "wddx_ic_012";
		t.verticalCenter = -44.5;
		t.width = 115;
		return t;
	};
	_proto.timeLabel_i = function () {
		var t = new eui.Label();
		this.timeLabel = t;
		t.bold = true;
		t.bottom = 108;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "300s";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto.countLabel_i = function () {
		var t = new eui.Label();
		this.countLabel = t;
		t.bold = true;
		t.bottom = 78;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "ProMagic_3";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "ProMagic_4*10";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 16;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 10;
		t.y = 10;
		return t;
	};
	return MagicListItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/MagicListVeiw.exml'] = window.MagicListVeiwSkin = (function (_super) {
	__extends(MagicListVeiwSkin, _super);
	function MagicListVeiwSkin() {
		_super.call(this);
		this.skinParts = ["container"];
		
		this.height = 318;
		this.width = 640;
		this.elementsContent = [this._Scroller1_i()];
	}
	var _proto = MagicListVeiwSkin.prototype;

	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.viewport = this.container_i();
		return t;
	};
	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.cacheAsBitmap = true;
		t.height = 318;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._MagicListItem1_i(),this._MagicListItem2_i(),this._MagicListItem3_i(),this._MagicListItem4_i(),this._MagicListItem5_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.paddingLeft = 5;
		return t;
	};
	_proto._MagicListItem1_i = function () {
		var t = new MagicListItem();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 3;
		t.y = 0;
		return t;
	};
	_proto._MagicListItem2_i = function () {
		var t = new MagicListItem();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 159;
		t.y = 0;
		return t;
	};
	_proto._MagicListItem3_i = function () {
		var t = new MagicListItem();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 315;
		t.y = 0;
		return t;
	};
	_proto._MagicListItem4_i = function () {
		var t = new MagicListItem();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 471;
		t.y = 0;
		return t;
	};
	_proto._MagicListItem5_i = function () {
		var t = new MagicListItem();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 627;
		t.y = 0;
		return t;
	};
	return MagicListVeiwSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/NewLixianPanel.exml'] = window.NewLixianPanelSkin = (function (_super) {
	__extends(NewLixianPanelSkin, _super);
	var NewLixianPanelSkin$Skin44 = 	(function (_super) {
		__extends(NewLixianPanelSkin$Skin44, _super);
		function NewLixianPanelSkin$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewLixianPanelSkin$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(20,38,0,4);
			t.source = "wddx_bt_006";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = -1.5;
			t.size = 32;
			t.text = "";
			t.textColor = 0x34630c;
			t.verticalCenter = -5;
			return t;
		};
		return NewLixianPanelSkin$Skin44;
	})(eui.Skin);

	var NewLixianPanelSkin$Skin45 = 	(function (_super) {
		__extends(NewLixianPanelSkin$Skin45, _super);
		function NewLixianPanelSkin$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewLixianPanelSkin$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(20,38,0,4);
			t.source = "wddx_bt_006";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = -1.5;
			t.size = 32;
			t.text = "";
			t.textColor = 0x34630c;
			t.verticalCenter = -5;
			return t;
		};
		return NewLixianPanelSkin$Skin45;
	})(eui.Skin);

	var NewLixianPanelSkin$Skin46 = 	(function (_super) {
		__extends(NewLixianPanelSkin$Skin46, _super);
		function NewLixianPanelSkin$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewLixianPanelSkin$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(19,9,0,61);
			t.source = "";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = false;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = -1.5;
			t.size = 32;
			t.text = "";
			t.textColor = 0xffffff;
			t.verticalCenter = -5;
			return t;
		};
		return NewLixianPanelSkin$Skin46;
	})(eui.Skin);

	var NewLixianPanelSkin$Skin47 = 	(function (_super) {
		__extends(NewLixianPanelSkin$Skin47, _super);
		function NewLixianPanelSkin$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewLixianPanelSkin$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(19,9,0,61);
			t.source = "";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = false;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = -1.5;
			t.size = 32;
			t.text = "";
			t.textColor = 0xffffff;
			t.verticalCenter = -5;
			return t;
		};
		return NewLixianPanelSkin$Skin47;
	})(eui.Skin);

	function NewLixianPanelSkin() {
		_super.call(this);
		this.skinParts = ["scName","title","www_70","beishuTxt","goldCount","double4GetBtn","doubleGetBtn","getBtn","closeBtn","tryCon"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.scName_i(),this.title_i(),this.www_70_i(),this.beishuTxt_i(),this.goldCount_i(),this.double4GetBtn_i(),this.doubleGetBtn_i(),this.getBtn_i(),this.closeBtn_i(),this.tryCon_i()];
	}
	var _proto = NewLixianPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 560.06;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(184,69,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0012";
		t.width = 560;
		t.y = 77.64;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(45,0,0,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0014";
		t.width = 274;
		t.y = 87.47;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 270.61;
		t.scale9Grid = new egret.Rectangle(19,16,0,0);
		t.source = "wddx_bg_0013";
		t.width = 524;
		t.x = 58;
		t.y = 225.64;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 3;
		t.source = "wddx_bg_0011";
		t.width = 524;
		t.x = 57.92;
		t.y = 285.64;
		return t;
	};
	_proto.scName_i = function () {
		var t = new eui.Image();
		this.scName = t;
		t.horizontalCenter = -82.5;
		t.source = "wddx_ic_004";
		t.verticalCenter = -177.5;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 36;
		t.text = "NewLiXian_1";
		t.x = 246.34;
		t.y = 100.31;
		return t;
	};
	_proto.www_70_i = function () {
		var t = new eui.Label();
		this.www_70 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 52;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "NewLiXian_2";
		t.textAlign = "center";
		t.textColor = 0x62e83c;
		t.verticalAlign = "middle";
		t.verticalCenter = -311;
		t.width = 506;
		return t;
	};
	_proto.beishuTxt_i = function () {
		var t = new eui.Label();
		this.beishuTxt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.text = "NewLiXian_3";
		t.textAlign = "center";
		t.width = 258.85;
		t.y = 456.36;
		return t;
	};
	_proto.goldCount_i = function () {
		var t = new eui.Label();
		this.goldCount = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "999";
		t.textAlign = "left";
		t.width = 225.73;
		t.x = 286;
		t.y = 377.24;
		return t;
	};
	_proto.double4GetBtn_i = function () {
		var t = new MyButton();
		this.double4GetBtn = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.label = "NewLiXian_4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.soundName = "\"\"";
		t.width = 182;
		t.y = 529.6;
		t.skinName = NewLixianPanelSkin$Skin44;
		return t;
	};
	_proto.doubleGetBtn_i = function () {
		var t = new MyButton();
		this.doubleGetBtn = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.label = "NewLiXian_5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.soundName = "\"\"";
		t.width = 182;
		t.y = 529.6;
		t.skinName = NewLixianPanelSkin$Skin45;
		return t;
	};
	_proto.getBtn_i = function () {
		var t = new MyButton();
		this.getBtn = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.label = "NewLiXian_6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.soundName = "\"\"";
		t.width = 182;
		t.y = 663.98;
		t.skinName = NewLixianPanelSkin$Skin46;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.label = "NewLiXian_7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.soundName = "\"\"";
		t.visible = false;
		t.width = 182;
		t.y = 826.57;
		t.skinName = NewLixianPanelSkin$Skin47;
		return t;
	};
	_proto.tryCon_i = function () {
		var t = new eui.Group();
		this.tryCon = t;
		t.height = 30;
		t.width = 640;
		t.y = 732.96;
		return t;
	};
	return NewLixianPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/OreItem.exml'] = window.OreItemSkin = (function (_super) {
	__extends(OreItemSkin, _super);
	function OreItemSkin() {
		_super.call(this);
		this.skinParts = ["ksIcon","ksName","ksCount","unlockFloor","www_276","lock"];
		
		this.height = 96;
		this.width = 74;
		this.elementsContent = [this._Image1_i(),this.ksIcon_i(),this.ksName_i(),this.ksCount_i(),this.lock_i()];
	}
	var _proto = OreItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 72;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,17,0,0);
		t.source = "wddx_bg_001";
		t.top = 0;
		t.width = 72;
		return t;
	};
	_proto.ksIcon_i = function () {
		var t = new eui.Image();
		this.ksIcon = t;
		t.height = 72;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(19,17,0,0);
		t.source = "";
		t.top = 0;
		t.width = 72;
		return t;
	};
	_proto.ksName_i = function () {
		var t = new eui.Label();
		this.ksName = t;
		t.bold = true;
		t.bottom = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "xProOre_1";
		t.visible = false;
		return t;
	};
	_proto.ksCount_i = function () {
		var t = new eui.Label();
		this.ksCount = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.right = 0;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x67ff72;
		t.y = 50.67;
		return t;
	};
	_proto.lock_i = function () {
		var t = new eui.Group();
		this.lock = t;
		t.height = 72;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 72;
		t.elementsContent = [this._Image2_i(),this.unlockFloor_i(),this.www_276_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 72;
		t.scale9Grid = new egret.Rectangle(15,17,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_005";
		t.width = 72;
		return t;
	};
	_proto.unlockFloor_i = function () {
		var t = new eui.Label();
		this.unlockFloor = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 39;
		t.horizontalCenter = 0.5;
		t.size = 18;
		t.text = "xxXProOre_2";
		t.textColor = 0xFAE927;
		return t;
	};
	_proto.www_276_i = function () {
		var t = new eui.Label();
		this.www_276 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 9;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "ProOre_3";
		t.textColor = 0xfae927;
		return t;
	};
	return OreItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/OrePanel.exml'] = window.OrePanelSkin = (function (_super) {
	__extends(OrePanelSkin, _super);
	var OrePanelSkin$Skin48 = 	(function (_super) {
		__extends(OrePanelSkin$Skin48, _super);
		function OrePanelSkin$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OrePanelSkin$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(19,9,0,61);
			t.source = "wddx_bt_007";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = -1.5;
			t.size = 32;
			t.text = "";
			t.verticalCenter = -5;
			return t;
		};
		return OrePanelSkin$Skin48;
	})(eui.Skin);

	var OrePanelSkin$Skin49 = 	(function (_super) {
		__extends(OrePanelSkin$Skin49, _super);
		function OrePanelSkin$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OrePanelSkin$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wddx_bt_005";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OrePanelSkin$Skin49;
	})(eui.Skin);

	function OrePanelSkin() {
		_super.call(this);
		this.skinParts = ["www_277","title2","title1","scGroup1","scGroup2","scGroup3","scGroup4","huishouJiangliGroup","remainRefreshCount","xhzsCount","refreshBtn","refreshGroup","getBtn","oresGroup","closeBtn","aniAdCon"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group2_i(),this.closeBtn_i(),this.aniAdCon_i()];
	}
	var _proto = OrePanelSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 800;
		t.horizontalCenter = 0;
		t.verticalCenter = -79;
		t.width = 568.18;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.www_277_i(),this.title2_i(),this.title1_i(),this._Group1_i(),this.huishouJiangliGroup_i(),this.refreshGroup_i(),this.getBtn_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 758;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(184,69,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0012";
		t.width = 560;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(45,0,0,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0014";
		t.width = 274;
		t.y = 7.83;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 218;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(19,16,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0013";
		t.width = 524;
		t.y = 110.12;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 72;
		t.height = 240;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(19,16,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0013";
		t.width = 524;
		t.y = 656;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0011";
		t.width = 524;
		t.x = 24.08;
		t.y = 184.1;
		return t;
	};
	_proto.www_277_i = function () {
		var t = new eui.Label();
		this.www_277 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 27.03;
		t.right = 40.17999999999995;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "ProOre_4:";
		t.textAlign = "center";
		t.textColor = 0x67FF72;
		t.width = 135.24;
		t.x = 428.58000000000004;
		t.y = 198.82;
		return t;
	};
	_proto.title2_i = function () {
		var t = new eui.Label();
		this.title2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -0.08999999999997499;
		t.lineSpacing = 6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "ProOre_5？\n\n			ProOre_6！";
		t.textAlign = "center";
		t.x = 94;
		t.y = 127.06;
		return t;
	};
	_proto.title1_i = function () {
		var t = new eui.Label();
		this.title1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "ProOre_7";
		t.y = 18.67;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.18;
		t.horizontalCenter = -88.08999999999997;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -142;
		t.width = 318.18;
		t.x = 37;
		t.y = 191;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.scGroup1_i(),this.scGroup2_i(),this.scGroup3_i(),this.scGroup4_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 7;
		t.paddingLeft = 10;
		return t;
	};
	_proto.scGroup1_i = function () {
		var t = new eui.Group();
		this.scGroup1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 70;
		t.x = 2.31;
		t.y = 0.62;
		t.elementsContent = [this._Image6_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 27;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "";
		t.textAlign = "center";
		return t;
	};
	_proto.scGroup2_i = function () {
		var t = new eui.Group();
		this.scGroup2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 70;
		t.x = 12.31;
		t.y = 10.62;
		t.elementsContent = [this._Image7_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bottom = 27;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "";
		t.textAlign = "center";
		return t;
	};
	_proto.scGroup3_i = function () {
		var t = new eui.Group();
		this.scGroup3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 70;
		t.x = 22.310000000000002;
		t.y = 20.619999999999997;
		t.elementsContent = [this._Image8_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bottom = 27;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "";
		t.textAlign = "center";
		return t;
	};
	_proto.scGroup4_i = function () {
		var t = new eui.Group();
		this.scGroup4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 70;
		t.x = 32.31;
		t.y = 30.619999999999997;
		t.elementsContent = [this._Image9_i(),this._Label7_i(),this._Label8_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bottom = 27;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "";
		t.textAlign = "center";
		return t;
	};
	_proto.huishouJiangliGroup_i = function () {
		var t = new eui.Group();
		this.huishouJiangliGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130;
		t.horizontalCenter = 177.91000000000003;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -143;
		t.width = 162;
		t.x = 381;
		t.y = 184;
		t.elementsContent = [this._Image10_i(),this._Label9_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 33;
		t.width = 70;
		t.y = -599.38;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	_proto.refreshGroup_i = function () {
		var t = new eui.Group();
		this.refreshGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130.3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 301.52;
		t.x = 26;
		t.y = 335.16;
		t.elementsContent = [this.remainRefreshCount_i(),this._Image11_i(),this._Image12_i(),this.xhzsCount_i(),this.refreshBtn_i()];
		return t;
	};
	_proto.remainRefreshCount_i = function () {
		var t = new eui.Label();
		this.remainRefreshCount = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.2400000000000091;
		t.size = 20;
		t.text = "ProOre_8";
		t.top = 16;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.scale9Grid = new egret.Rectangle(19,17,0,0);
		t.source = "wddx_bg_0013";
		t.width = 270;
		t.x = 16;
		t.y = 43;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.source = "wddx_ic_016";
		t.verticalCenter = 15.849999999999994;
		t.width = 36;
		t.x = 32;
		return t;
	};
	_proto.xhzsCount_i = function () {
		var t = new eui.Label();
		this.xhzsCount = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "x5";
		t.x = 76.44;
		t.y = 67;
		return t;
	};
	_proto.refreshBtn_i = function () {
		var t = new MyButton();
		this.refreshBtn = t;
		t.anchorOffsetX = 0;
		t.label = "ProOre_9";
		t.skinName = "button3Skin";
		t.width = 79;
		t.x = 192;
		t.y = 56;
		return t;
	};
	_proto.getBtn_i = function () {
		var t = new MyButton();
		this.getBtn = t;
		t.anchorOffsetX = 0;
		t.label = "ProOre_10";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 182;
		t.x = 348;
		t.y = 379.1;
		t.skinName = OrePanelSkin$Skin48;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 220;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 508;
		t.x = 31.57;
		t.y = 495.09;
		t.viewport = this.oresGroup_i();
		return t;
	};
	_proto.oresGroup_i = function () {
		var t = new eui.Group();
		this.oresGroup = t;
		t.percentHeight = 100;
		t.width = 508;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "left";
		t.horizontalGap = 25;
		t.orientation = "rows";
		t.paddingBottom = 0;
		t.paddingLeft = 16;
		t.paddingTop = 0;
		t.verticalGap = 20;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.label = "";
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 94;
		t.skinName = OrePanelSkin$Skin49;
		return t;
	};
	_proto.aniAdCon_i = function () {
		var t = new eui.Group();
		this.aniAdCon = t;
		t.height = 100;
		t.left = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.y = 60;
		return t;
	};
	return OrePanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/PlayerIntroduceItem.exml'] = window.PlayerIntroduceItemSkin = (function (_super) {
	__extends(PlayerIntroduceItemSkin, _super);
	function PlayerIntroduceItemSkin() {
		_super.call(this);
		this.skinParts = ["icon","nameLabel","tipsLabel","www_294","openLvLabel","luckGroup"];
		
		this.height = 98;
		this.width = 346;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.icon_i(),this.nameLabel_i(),this.tipsLabel_i(),this.luckGroup_i()];
	}
	var _proto = PlayerIntroduceItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 98;
		t.scale9Grid = new egret.Rectangle(17,17,2,2);
		t.source = "wddx_bg_004";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.scale9Grid = new egret.Rectangle(17,17,2,2);
		t.source = "wddx_bg_020";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 11;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.height = 75;
		t.scale9Grid = new egret.Rectangle(17,17,2,2);
		t.source = "wddx_ic_007";
		t.verticalCenter = 0.5;
		t.width = 75;
		t.x = 13;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "ProIntroduce_1";
		t.textColor = 0x333333;
		t.width = 148;
		t.x = 103;
		t.y = 12;
		return t;
	};
	_proto.tipsLabel_i = function () {
		var t = new eui.Label();
		this.tipsLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 46;
		t.size = 20;
		t.text = "ProIntroduce_1";
		t.textColor = 0x333333;
		t.width = 240;
		t.x = 103;
		t.y = 39;
		return t;
	};
	_proto.luckGroup_i = function () {
		var t = new eui.Group();
		this.luckGroup = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this.www_294_i(),this._Label1_i(),this.openLvLabel_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 98;
		t.scale9Grid = new egret.Rectangle(17,17,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0015";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.www_294_i = function () {
		var t = new eui.Label();
		this.www_294 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "ProIntroduce_2";
		t.textColor = 0xffffff;
		t.width = 148;
		t.x = 29;
		t.y = 22;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "Lv:";
		t.textColor = 0xffffff;
		t.width = 148;
		t.x = 28;
		t.y = 52;
		return t;
	};
	_proto.openLvLabel_i = function () {
		var t = new eui.Label();
		this.openLvLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "30";
		t.textColor = 0xfcc111;
		t.width = 176;
		t.x = 61;
		t.y = 53;
		return t;
	};
	return PlayerIntroduceItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/PlayerIntroducePanel.exml'] = window.PlayerIntroducePanelSkin = (function (_super) {
	__extends(PlayerIntroducePanelSkin, _super);
	var PlayerIntroducePanelSkin$Skin50 = 	(function (_super) {
		__extends(PlayerIntroducePanelSkin$Skin50, _super);
		function PlayerIntroducePanelSkin$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayerIntroducePanelSkin$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wddx_bt_005";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlayerIntroducePanelSkin$Skin50;
	})(eui.Skin);

	function PlayerIntroducePanelSkin() {
		_super.call(this);
		this.skinParts = ["www_295","addImage","www_296","inviteAvatar","helpSuc","inviteConstainer","headKuang","icon","starConstainer","headConstainer","nameLabel","levelLabel","dpsLabel","breakthrought","skillConstainer","closeBtn","www_300","aniAdCon","favlistCon"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = PlayerIntroducePanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 866;
		t.horizontalCenter = 0;
		t.verticalCenter = -73;
		t.width = 560;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label1_i(),this._Label2_i(),this.www_295_i(),this.inviteConstainer_i(),this.headConstainer_i(),this.nameLabel_i(),this.levelLabel_i(),this.dpsLabel_i(),this.breakthrought_i(),this.skillConstainer_i(),this.closeBtn_i(),this.www_300_i(),this.aniAdCon_i(),this.favlistCon_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(184,76,1,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0012";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 64;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(45,0,0,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0014";
		t.width = 275;
		t.y = 9.4;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 620;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(19,16,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0013";
		t.verticalCenter = 87;
		t.width = 524;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "Lv:";
		t.textColor = 0x67ff72;
		t.width = 148;
		t.x = 124;
		t.y = 104;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "DPS:";
		t.textColor = 0x67ff72;
		t.width = 148;
		t.x = 124.81;
		t.y = 129.34;
		return t;
	};
	_proto.www_295_i = function () {
		var t = new eui.Label();
		this.www_295 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "ProIntroduce_3:";
		t.textColor = 0x67FF72;
		t.width = 148;
		t.x = 125.47;
		t.y = 152.68;
		return t;
	};
	_proto.inviteConstainer_i = function () {
		var t = new eui.Group();
		this.inviteConstainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 124;
		t.width = 146;
		t.x = 365;
		t.y = 81;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this.addImage_i(),this.www_296_i(),this.inviteAvatar_i(),this.helpSuc_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 85;
		t.scale9Grid = new egret.Rectangle(17,17,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_036";
		t.width = 85;
		t.x = 38.33;
		t.y = 3.990000000000009;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 85;
		t.scale9Grid = new egret.Rectangle(17,17,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_037";
		t.width = 85;
		t.x = 38.33;
		t.y = 3.97;
		return t;
	};
	_proto.addImage_i = function () {
		var t = new eui.Image();
		this.addImage = t;
		t.height = 58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_035";
		t.width = 58;
		t.x = 52.35;
		t.y = 16.66;
		return t;
	};
	_proto.www_296_i = function () {
		var t = new eui.Label();
		this.www_296 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 14;
		t.text = "ProIntroduce_4";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.width = 80;
		t.x = 42.05;
		t.y = 68.34;
		return t;
	};
	_proto.inviteAvatar_i = function () {
		var t = new eui.Image();
		this.inviteAvatar = t;
		t.height = 69;
		t.scale9Grid = new egret.Rectangle(17,17,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 69;
		t.x = 46.64;
		t.y = 11.83;
		return t;
	};
	_proto.helpSuc_i = function () {
		var t = new eui.Label();
		this.helpSuc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 27;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "ProIntroduce_5";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.x = -37;
		t.y = 92.31;
		return t;
	};
	_proto.headConstainer_i = function () {
		var t = new eui.Group();
		this.headConstainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 137;
		t.width = 374;
		t.x = 9;
		t.y = 66;
		t.elementsContent = [this._Image6_i(),this.headKuang_i(),this.icon_i(),this.starConstainer_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(17,17,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_028";
		t.width = 100;
		t.x = 11.44;
		t.y = 22.22;
		return t;
	};
	_proto.headKuang_i = function () {
		var t = new eui.Image();
		this.headKuang = t;
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(17,17,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 100;
		t.x = 11.44;
		t.y = 22.22;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.height = 95;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_007";
		t.width = 95;
		t.x = 14.48;
		t.y = 25.26;
		return t;
	};
	_proto.starConstainer_i = function () {
		var t = new eui.Group();
		this.starConstainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 17;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 11.27;
		t.y = 115.53;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 2;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_029";
		t.width = 17;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_029";
		t.width = 17;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_029";
		t.width = 17;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_029";
		t.width = 17;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_029";
		t.width = 17;
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "ProIntroduce_6";
		t.textAlign = "center";
		t.width = 200;
		t.x = 171;
		t.y = 26.08;
		return t;
	};
	_proto.levelLabel_i = function () {
		var t = new eui.Label();
		this.levelLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "999";
		t.textColor = 0xffffff;
		t.width = 148;
		t.x = 155.84;
		t.y = 104;
		return t;
	};
	_proto.dpsLabel_i = function () {
		var t = new eui.Label();
		this.dpsLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "99D";
		t.textColor = 0xffffff;
		t.width = 194;
		t.x = 178.56;
		t.y = 129.83;
		return t;
	};
	_proto.breakthrought_i = function () {
		var t = new eui.Label();
		this.breakthrought = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "ProIntroduce_7";
		t.textColor = 0xFFFFFF;
		t.width = 194;
		t.x = 179.22;
		t.y = 153.17;
		return t;
	};
	_proto.skillConstainer_i = function () {
		var t = new eui.Group();
		this.skillConstainer = t;
		t.height = 620;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 524;
		t.x = 18;
		t.y = 210;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._PlayerIntroduceItem1_i(),this._PlayerIntroduceItem2_i(),this._PlayerIntroduceItem3_i(),this._PlayerIntroduceItem4_i(),this._PlayerIntroduceItem5_i(),this._PlayerIntroduceItem6_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 4;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._PlayerIntroduceItem1_i = function () {
		var t = new PlayerIntroduceItem();
		t.height = 98;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 25.45;
		return t;
	};
	_proto._PlayerIntroduceItem2_i = function () {
		var t = new PlayerIntroduceItem();
		t.height = 98;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 25.45;
		return t;
	};
	_proto._PlayerIntroduceItem3_i = function () {
		var t = new PlayerIntroduceItem();
		t.height = 98;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 25.45;
		return t;
	};
	_proto._PlayerIntroduceItem4_i = function () {
		var t = new PlayerIntroduceItem();
		t.height = 98;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 25.45;
		return t;
	};
	_proto._PlayerIntroduceItem5_i = function () {
		var t = new PlayerIntroduceItem();
		t.height = 98;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 25.45;
		return t;
	};
	_proto._PlayerIntroduceItem6_i = function () {
		var t = new PlayerIntroduceItem();
		t.height = 98;
		t.horizontalCenter = 0;
		t.percentWidth = 95;
		t.y = 25.45;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.label = "";
		t.x = 497.33;
		t.y = 7.36;
		t.skinName = PlayerIntroducePanelSkin$Skin50;
		return t;
	};
	_proto.www_300_i = function () {
		var t = new eui.Label();
		this.www_300 = t;
		t.anchorOffsetX = 0;
		t.bottom = 13.309999999999945;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "ProIntroduce_8";
		t.textAlign = "center";
		t.textColor = 0x60EA0E;
		t.width = 500;
		t.x = 80;
		t.y = 1013.69;
		return t;
	};
	_proto.aniAdCon_i = function () {
		var t = new eui.Group();
		this.aniAdCon = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 300;
		t.y = 73;
		return t;
	};
	_proto.favlistCon_i = function () {
		var t = new eui.Group();
		this.favlistCon = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = -40;
		t.y = 886.36;
		return t;
	};
	return PlayerIntroducePanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/PlayerListItem.exml'] = window.PlayerListItemSkin = (function (_super) {
	__extends(PlayerListItemSkin, _super);
	var PlayerListItemSkin$Skin51 = 	(function (_super) {
		__extends(PlayerListItemSkin$Skin51, _super);
		function PlayerListItemSkin$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayerListItemSkin$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(20,0,0,57);
			t.source = "wddx_bt_003";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.scaleX = 0.5;
			t.scaleY = 0.5;
			t.source = "ad_icon_png";
			t.x = -7;
			t.y = -6;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 22;
			t.text = "ProPlayerList_6";
			t.textColor = 0x41680F;
			t.verticalCenter = 2.5;
			return t;
		};
		return PlayerListItemSkin$Skin51;
	})(eui.Skin);

	var PlayerListItemSkin$Skin52 = 	(function (_super) {
		__extends(PlayerListItemSkin$Skin52, _super);
		function PlayerListItemSkin$Skin52() {
			_super.call(this);
			this.skinParts = ["iconDisplay","tips","labelDisplay"];
			
			this.elementsContent = [this.iconDisplay_i(),this._Image1_i(),this._Image2_i(),this.tips_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayerListItemSkin$Skin52.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(20,0,0,115);
			t.source = "wddx_bt_009";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.bottom = 16;
			t.height = 30;
			t.horizontalCenter = 7;
			t.scale9Grid = new egret.Rectangle(20,15,0,0);
			t.source = "wddx_bg_033";
			t.width = 130;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.bottom = 16;
			t.height = 30;
			t.horizontalCenter = -56;
			t.source = "wddx_ic_004";
			t.width = 30;
			return t;
		};
		_proto.tips_i = function () {
			var t = new eui.Label();
			this.tips = t;
			t.anchorOffsetY = 0;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.height = 35;
			t.horizontalCenter = 0;
			t.size = 24;
			t.text = "ProPlayerList_7";
			t.textAlign = "center";
			t.textColor = 0xA22C11;
			t.verticalAlign = "middle";
			t.verticalCenter = -28.5;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bottom = 22;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 13;
			t.size = 18;
			t.text = "9999999";
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.verticalAlign = "middle";
			t.width = 100;
			return t;
		};
		return PlayerListItemSkin$Skin52;
	})(eui.Skin);

	var PlayerListItemSkin$Skin53 = 	(function (_super) {
		__extends(PlayerListItemSkin$Skin53, _super);
		function PlayerListItemSkin$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayerListItemSkin$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(19,0,0,57);
			t.source = "wddx_bt_001";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 24;
			t.horizontalCenter = 20;
			t.source = "wddx_ic_004";
			t.verticalCenter = 0;
			t.width = 24;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.left = 16;
			t.size = 22;
			t.textAlign = "right";
			t.textColor = 0xA22C11;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.right = 14;
			t.size = 22;
			t.text = "ProPlayerList_8";
			t.textAlign = "center";
			t.textColor = 0xA22C11;
			t.verticalCenter = 0.5;
			return t;
		};
		return PlayerListItemSkin$Skin53;
	})(eui.Skin);

	var PlayerListItemSkin$Skin54 = 	(function (_super) {
		__extends(PlayerListItemSkin$Skin54, _super);
		function PlayerListItemSkin$Skin54() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayerListItemSkin$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(19,0,0,55);
			t.source = "wddx_bt_001";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 22;
			t.text = "ProPlayerList_10";
			t.textColor = 0xA22C11;
			t.verticalCenter = 0;
			return t;
		};
		return PlayerListItemSkin$Skin54;
	})(eui.Skin);

	function PlayerListItemSkin() {
		_super.call(this);
		this.skinParts = ["playerImgbg","playerImg","nameLabel","levelLabel","tipsLabel","tipsLabel0","starConstainer","skillConstainer","skillBtn","luckSkillBtn","buyBtn","shareBuyBtn","upLevelBtn"];
		
		this.height = 110;
		this.width = 640;
		this.elementsContent = [this._Group1_i(),this.starConstainer_i(),this._Group2_i(),this.skillBtn_i(),this.luckSkillBtn_i(),this.buyBtn_i(),this.shareBuyBtn_i(),this.upLevelBtn_i()];
	}
	var _proto = PlayerListItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 110;
		t.width = 435;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.playerImgbg_i(),this.playerImg_i(),this.nameLabel_i(),this.levelLabel_i(),this.tipsLabel_i(),this.tipsLabel0_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.scale9Grid = new egret.Rectangle(12,12,5,3);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_004";
		t.width = 435;
		t.x = 6;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 91;
		t.left = 14;
		t.scale9Grid = new egret.Rectangle(13,16,3,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_028";
		t.top = 10;
		t.width = 91;
		return t;
	};
	_proto.playerImgbg_i = function () {
		var t = new eui.Image();
		this.playerImgbg = t;
		t.height = 91;
		t.left = 14;
		t.scale9Grid = new egret.Rectangle(13,16,3,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 10;
		t.width = 91;
		return t;
	};
	_proto.playerImg_i = function () {
		var t = new eui.Image();
		this.playerImg = t;
		t.height = 77;
		t.horizontalCenter = -158;
		t.scale9Grid = new egret.Rectangle(13,16,3,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ic_007";
		t.verticalCenter = 0.5;
		t.width = 73;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "ProPlayerList_11";
		t.textColor = 0x524e4e;
		t.verticalAlign = "bottom";
		t.x = 111;
		t.y = 6;
		return t;
	};
	_proto.levelLabel_i = function () {
		var t = new eui.Label();
		this.levelLabel = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "ProPlayerList_2:9999999";
		t.textAlign = "right";
		t.textColor = 0x524e4e;
		t.width = 200;
		t.x = 229.98;
		t.y = 5.34;
		return t;
	};
	_proto.tipsLabel_i = function () {
		var t = new eui.Label();
		this.tipsLabel = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "ProPlayerList_3:9999999";
		t.textAlign = "right";
		t.textColor = 0x524e4e;
		t.verticalAlign = "middle";
		t.width = 200;
		t.x = 229.98;
		t.y = 27;
		return t;
	};
	_proto.tipsLabel0_i = function () {
		var t = new eui.Label();
		this.tipsLabel0 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.stroke = 3;
		t.strokeColor = 0x1e68ad;
		t.text = "ProPlayerList_4+10";
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 200;
		t.x = 230.86;
		t.y = 27.88;
		return t;
	};
	_proto.starConstainer_i = function () {
		var t = new eui.Group();
		this.starConstainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.width = 189;
		t.x = 114;
		t.y = 31;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "wddx_ic_029";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "wddx_ic_029";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "wddx_ic_029";
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "wddx_ic_029";
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "wddx_ic_029";
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.width = 223;
		t.x = 109;
		t.y = 50;
		t.elementsContent = [this._Image8_i(),this.skillConstainer_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 40;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,15,0,0);
		t.source = "wddx_bg_002";
		t.verticalCenter = 0;
		t.width = 222;
		return t;
	};
	_proto.skillConstainer_i = function () {
		var t = new eui.Group();
		this.skillConstainer = t;
		t.anchorOffsetX = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 221;
		t.x = 4;
		t.y = 9;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 6;
		t.paddingLeft = 3;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 30;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 30;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 30;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 30;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 30;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 30;
		return t;
	};
	_proto.skillBtn_i = function () {
		var t = new MyButton();
		this.skillBtn = t;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.icon = "wddx_bt_001";
		t.label = "ProPlayerList_5";
		t.width = 80;
		t.x = 344;
		t.y = 57;
		t.skinName = PlayerListItemSkin$Skin51;
		return t;
	};
	_proto.luckSkillBtn_i = function () {
		var t = new MyButton();
		this.luckSkillBtn = t;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.icon = "wddx_bt_009";
		t.label = "999";
		t.visible = false;
		t.width = 190;
		t.x = 444;
		t.y = 0;
		t.skinName = PlayerListItemSkin$Skin52;
		return t;
	};
	_proto.buyBtn_i = function () {
		var t = new MyButton();
		this.buyBtn = t;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.icon = "wddx_bt_003";
		t.label = "999";
		t.width = 190;
		t.x = 445;
		t.y = -1;
		t.skinName = PlayerListItemSkin$Skin53;
		return t;
	};
	_proto.shareBuyBtn_i = function () {
		var t = new MyButton();
		this.shareBuyBtn = t;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.icon = "wddx_bt_001";
		t.label = "ProPlayerList_9";
		t.width = 190;
		t.x = 445;
		t.y = 56;
		t.skinName = PlayerListItemSkin$Skin54;
		return t;
	};
	_proto.upLevelBtn_i = function () {
		var t = new PlayerUpLevelBtn();
		this.upLevelBtn = t;
		t.height = 110;
		t.icon = "wddx_bt_002";
		t.isScale = true;
		t.label = "Button";
		t.skinName = "button5Skin";
		t.width = 190;
		t.x = 444.55;
		t.y = 0;
		return t;
	};
	return PlayerListItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/PlayerListVeiw.exml'] = window.PlayerListVeiwSkin = (function (_super) {
	__extends(PlayerListVeiwSkin, _super);
	function PlayerListVeiwSkin() {
		_super.call(this);
		this.skinParts = ["container"];
		
		this.height = 318;
		this.width = 640;
		this.elementsContent = [this._Scroller1_i()];
	}
	var _proto = PlayerListVeiwSkin.prototype;

	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.viewport = this.container_i();
		return t;
	};
	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.cacheAsBitmap = true;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "left";
		t.paddingLeft = 0;
		return t;
	};
	return PlayerListVeiwSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/PlayerModel.exml'] = window.PlayerModelSkin = (function (_super) {
	__extends(PlayerModelSkin, _super);
	function PlayerModelSkin() {
		_super.call(this);
		this.skinParts = ["nameLabel","container"];
		
		this.height = 150;
		this.width = 100;
		this.elementsContent = [this.container_i()];
	}
	var _proto = PlayerModelSkin.prototype;

	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 130;
		t.bottom = 0;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 100;
		t.elementsContent = [this.nameLabel_i()];
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "PlayerModel_1";
		t.textAlign = "center";
		t.textColor = 0xe00f0f;
		t.verticalAlign = "middle";
		t.visible = false;
		t.percentWidth = 100;
		t.y = 26;
		return t;
	};
	return PlayerModelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/PlusGoldPanel.exml'] = window.PlusGoldPanelSkin = (function (_super) {
	__extends(PlusGoldPanelSkin, _super);
	var PlusGoldPanelSkin$Skin55 = 	(function (_super) {
		__extends(PlusGoldPanelSkin$Skin55, _super);
		function PlusGoldPanelSkin$Skin55() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlusGoldPanelSkin$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wddx_bt_005";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlusGoldPanelSkin$Skin55;
	})(eui.Skin);

	var PlusGoldPanelSkin$Skin56 = 	(function (_super) {
		__extends(PlusGoldPanelSkin$Skin56, _super);
		function PlusGoldPanelSkin$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlusGoldPanelSkin$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(19,9,0,61);
			t.source = "wddx_bt_006";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = -1.5;
			t.size = 32;
			t.text = "";
			t.textColor = 0x34630c;
			t.verticalCenter = -5;
			return t;
		};
		return PlusGoldPanelSkin$Skin56;
	})(eui.Skin);

	function PlusGoldPanelSkin() {
		_super.call(this);
		this.skinParts = ["guangxiao","plusImg","plusName","plusCount","tentips","closeBtn","getBtn","adCon","aniAdCon0","aniAdCon1"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.guangxiao_i(),this.plusImg_i(),this.plusName_i(),this.plusCount_i(),this.tentips_i(),this.closeBtn_i(),this.getBtn_i(),this.adCon_i(),this.aniAdCon0_i(),this.aniAdCon1_i()];
	}
	var _proto = PlusGoldPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 634;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(184,69,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0012";
		t.verticalCenter = -157;
		t.width = 560;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(45,0,0,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0014";
		t.verticalCenter = -432.5;
		t.width = 274;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 460;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(19,16,0,0);
		t.source = "wddx_bg_0013";
		t.verticalCenter = -170;
		t.width = 524;
		return t;
	};
	_proto.guangxiao_i = function () {
		var t = new eui.Image();
		this.guangxiao = t;
		t.anchorOffsetX = 221;
		t.anchorOffsetY = 224;
		t.height = 448;
		t.horizontalCenter = 0;
		t.source = "wddx_guang_png";
		t.verticalCenter = -174;
		t.width = 442;
		return t;
	};
	_proto.plusImg_i = function () {
		var t = new eui.Image();
		this.plusImg = t;
		t.horizontalCenter = 6.5;
		t.source = "";
		t.verticalCenter = -167.5;
		return t;
	};
	_proto.plusName_i = function () {
		var t = new eui.Label();
		this.plusName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 40.55;
		t.horizontalCenter = 0.5;
		t.size = 36;
		t.text = "PlusGold_1";
		t.textAlign = "center";
		t.verticalCenter = -432.5;
		t.width = 199.28;
		return t;
	};
	_proto.plusCount_i = function () {
		var t = new eui.Label();
		this.plusCount = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.horizontalCenter = 0;
		t.text = "PlusGold_2+10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 22;
		t.width = 506;
		return t;
	};
	_proto.tentips_i = function () {
		var t = new eui.Label();
		this.tentips = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 52;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "PlusGold_3";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 52;
		t.width = 506;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.horizontalCenter = 261;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -417;
		t.skinName = PlusGoldPanelSkin$Skin55;
		return t;
	};
	_proto.getBtn_i = function () {
		var t = new MyButton();
		this.getBtn = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.label = "PlusGold_4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.soundName = "gold";
		t.verticalCenter = 108.5;
		t.width = 182;
		t.skinName = PlusGoldPanelSkin$Skin56;
		return t;
	};
	_proto.adCon_i = function () {
		var t = new eui.Group();
		this.adCon = t;
		t.height = 30;
		t.width = 640;
		t.y = 761.65;
		return t;
	};
	_proto.aniAdCon0_i = function () {
		var t = new eui.Group();
		this.aniAdCon0 = t;
		t.height = 100;
		t.width = 100;
		t.x = 42;
		t.y = 344;
		return t;
	};
	_proto.aniAdCon1_i = function () {
		var t = new eui.Group();
		this.aniAdCon1 = t;
		t.height = 100;
		t.width = 100;
		t.x = 500;
		t.y = 344;
		return t;
	};
	return PlusGoldPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/SevenDaySignItem.exml'] = window.SevenDaySignItemSkin = (function (_super) {
	__extends(SevenDaySignItemSkin, _super);
	function SevenDaySignItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","icon","finish","dateLabel","rewardValueLabel"];
		
		this.height = 156;
		this.width = 157;
		this.elementsContent = [this.bg_i(),this.icon_i(),this.finish_i(),this.dateLabel_i(),this.rewardValueLabel_i()];
	}
	var _proto = SevenDaySignItemSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.percentHeight = 100;
		t.source = "wddx_bt_027";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.height = 40;
		t.horizontalCenter = -0.5;
		t.source = "wddx_ic_017";
		t.verticalCenter = 10;
		t.width = 40;
		return t;
	};
	_proto.finish_i = function () {
		var t = new eui.Image();
		this.finish = t;
		t.height = 69;
		t.horizontalCenter = 0;
		t.source = "wddx_bg_038";
		t.verticalCenter = 15.5;
		t.width = 117;
		return t;
	};
	_proto.dateLabel_i = function () {
		var t = new eui.Label();
		this.dateLabel = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "Pro7DaySign_1";
		t.textColor = 0x44bede;
		t.y = 24;
		return t;
	};
	_proto.rewardValueLabel_i = function () {
		var t = new eui.Label();
		this.rewardValueLabel = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "Pro7DaySign_2";
		t.textColor = 0xffffff;
		t.y = 117;
		return t;
	};
	return SevenDaySignItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/SevenDaySignPanel.exml'] = window.SevenDaySignPanelSkin = (function (_super) {
	__extends(SevenDaySignPanelSkin, _super);
	var SevenDaySignPanelSkin$Skin57 = 	(function (_super) {
		__extends(SevenDaySignPanelSkin$Skin57, _super);
		function SevenDaySignPanelSkin$Skin57() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SevenDaySignPanelSkin$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(15,36,11,6);
			t.source = "wddx_bt_007";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 28;
			t.verticalCenter = -3;
			return t;
		};
		return SevenDaySignPanelSkin$Skin57;
	})(eui.Skin);

	var SevenDaySignPanelSkin$Skin58 = 	(function (_super) {
		__extends(SevenDaySignPanelSkin$Skin58, _super);
		function SevenDaySignPanelSkin$Skin58() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SevenDaySignPanelSkin$Skin58.prototype;

		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return SevenDaySignPanelSkin$Skin58;
	})(eui.Skin);

	var SevenDaySignPanelSkin$Skin59 = 	(function (_super) {
		__extends(SevenDaySignPanelSkin$Skin59, _super);
		function SevenDaySignPanelSkin$Skin59() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SevenDaySignPanelSkin$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wddx_bt_005";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SevenDaySignPanelSkin$Skin59;
	})(eui.Skin);

	function SevenDaySignPanelSkin() {
		_super.call(this);
		this.skinParts = ["itemConstainer","doubleBtn","getBtn","closeBtn","aniAdCon0","aniAdCon1","bkCon"];
		
		this.height = 1139;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = SevenDaySignPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 270;
		t.height = 757.58;
		t.horizontalCenter = 0;
		t.width = 560;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.itemConstainer_i(),this.doubleBtn_i(),this.getBtn_i(),this.closeBtn_i(),this.aniAdCon0_i(),this.aniAdCon1_i(),this.bkCon_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 748;
		t.scale9Grid = new egret.Rectangle(184,76,1,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0012";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 107;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(45,0,0,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_ft_007";
		t.width = 388;
		t.y = -16.61;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 524;
		t.horizontalCenter = 1;
		t.scale9Grid = new egret.Rectangle(19,16,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0013";
		t.verticalCenter = -16.79000000000002;
		t.width = 524;
		t.x = 58;
		return t;
	};
	_proto.itemConstainer_i = function () {
		var t = new eui.Group();
		this.itemConstainer = t;
		t.height = 524;
		t.horizontalCenter = 0;
		t.verticalCenter = -16.79000000000002;
		t.width = 524;
		t.elementsContent = [this._SevenDaySignItem1_i(),this._SevenDaySignItem2_i(),this._SevenDaySignItem3_i(),this._SevenDaySignItem4_i(),this._SevenDaySignItem5_i(),this._SevenDaySignItem6_i(),this._SevenDaySignItem7_i()];
		return t;
	};
	_proto._SevenDaySignItem1_i = function () {
		var t = new SevenDaySignItem();
		t.height = 156;
		t.width = 157;
		t.x = 18.48;
		t.y = 19;
		return t;
	};
	_proto._SevenDaySignItem2_i = function () {
		var t = new SevenDaySignItem();
		t.height = 156;
		t.horizontalCenter = 0;
		t.width = 157;
		t.y = 19;
		return t;
	};
	_proto._SevenDaySignItem3_i = function () {
		var t = new SevenDaySignItem();
		t.height = 156;
		t.width = 157;
		t.x = 348.76;
		t.y = 19;
		return t;
	};
	_proto._SevenDaySignItem4_i = function () {
		var t = new SevenDaySignItem();
		t.height = 156;
		t.width = 157;
		t.x = 17.84;
		t.y = 182.5;
		return t;
	};
	_proto._SevenDaySignItem5_i = function () {
		var t = new SevenDaySignItem();
		t.height = 156;
		t.width = 157;
		t.x = 182.48;
		t.y = 182.5;
		return t;
	};
	_proto._SevenDaySignItem6_i = function () {
		var t = new SevenDaySignItem();
		t.height = 156;
		t.width = 157;
		t.x = 348.12;
		t.y = 182.5;
		return t;
	};
	_proto._SevenDaySignItem7_i = function () {
		var t = new SevenDaySignItem();
		t.height = 156;
		t.horizontalCenter = 0;
		t.width = 331;
		t.y = 344.01;
		return t;
	};
	_proto.doubleBtn_i = function () {
		var t = new MyButton();
		this.doubleBtn = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = -0.5;
		t.label = "Pro7DaySign_10";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 165.33;
		t.y = 650;
		t.skinName = SevenDaySignPanelSkin$Skin57;
		return t;
	};
	_proto.getBtn_i = function () {
		var t = new MyButton();
		this.getBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -32.41999999999996;
		t.height = 51;
		t.horizontalCenter = 0;
		t.label = "Pro7DaySign_11";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 86;
		t.skinName = SevenDaySignPanelSkin$Skin58;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 0;
		t.bottom = 665.58;
		t.height = 86;
		t.horizontalCenter = 261;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 86;
		t.skinName = SevenDaySignPanelSkin$Skin59;
		return t;
	};
	_proto.aniAdCon0_i = function () {
		var t = new eui.Group();
		this.aniAdCon0 = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 0;
		t.y = 600;
		return t;
	};
	_proto.aniAdCon1_i = function () {
		var t = new eui.Group();
		this.aniAdCon1 = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 460;
		t.y = 600;
		return t;
	};
	_proto.bkCon_i = function () {
		var t = new eui.Group();
		this.bkCon = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 413.53;
		t.y = 629.67;
		return t;
	};
	return SevenDaySignPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/ShareGetQuan.exml'] = window.ShareGetQuanSkin = (function (_super) {
	__extends(ShareGetQuanSkin, _super);
	var ShareGetQuanSkin$Skin60 = 	(function (_super) {
		__extends(ShareGetQuanSkin$Skin60, _super);
		function ShareGetQuanSkin$Skin60() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShareGetQuanSkin$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(15,36,11,6);
			t.source = "wddx_bt_007";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.verticalCenter = -4;
			return t;
		};
		return ShareGetQuanSkin$Skin60;
	})(eui.Skin);

	var ShareGetQuanSkin$Skin61 = 	(function (_super) {
		__extends(ShareGetQuanSkin$Skin61, _super);
		function ShareGetQuanSkin$Skin61() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShareGetQuanSkin$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return ShareGetQuanSkin$Skin61;
	})(eui.Skin);

	function ShareGetQuanSkin() {
		_super.call(this);
		this.skinParts = ["bg0","bg1","bg2","titleTxt","infoTxt","shareBtn","closeBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ShareGetQuanSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 603;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 603;
		t.elementsContent = [this.bg0_i(),this.bg1_i(),this.bg2_i(),this.titleTxt_i(),this._Image1_i(),this.infoTxt_i(),this.shareBtn_i(),this.closeBtn_i()];
		return t;
	};
	_proto.bg0_i = function () {
		var t = new eui.Image();
		this.bg0 = t;
		t.height = 603;
		t.scale9Grid = new egret.Rectangle(184,76,1,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0012";
		t.width = 603;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg1_i = function () {
		var t = new eui.Image();
		this.bg1 = t;
		t.height = 64;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(45,0,0,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0014";
		t.width = 275;
		t.x = 183;
		t.y = 9.4;
		return t;
	};
	_proto.bg2_i = function () {
		var t = new eui.Image();
		this.bg2 = t;
		t.anchorOffsetY = 0;
		t.height = 340.67;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(19,16,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0013";
		t.verticalCenter = 0;
		t.width = 524;
		t.x = 58;
		return t;
	};
	_proto.titleTxt_i = function () {
		var t = new eui.Label();
		this.titleTxt = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "ProGetQuan_1";
		t.textAlign = "center";
		t.width = 184.12;
		t.x = 228;
		t.y = 24.08;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "wddx_ic_128";
		t.x = 253;
		t.y = 213;
		return t;
	};
	_proto.infoTxt_i = function () {
		var t = new eui.Label();
		this.infoTxt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.horizontalCenter = 0.5;
		t.text = "ProGetQuan_2";
		t.textAlign = "center";
		t.verticalCenter = 48.5;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new MyButton();
		this.shareBtn = t;
		t.anchorOffsetX = 0;
		t.bottom = 25;
		t.horizontalCenter = -13;
		t.label = "ProGetQuan_3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 180;
		t.skinName = ShareGetQuanSkin$Skin60;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.anchorOffsetX = 0;
		t.bottom = -37;
		t.horizontalCenter = -13;
		t.label = "ProGetQuan_4!";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 176.67;
		t.skinName = ShareGetQuanSkin$Skin61;
		return t;
	};
	return ShareGetQuanSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/SkillListItem.exml'] = window.SkillListItemSkin = (function (_super) {
	__extends(SkillListItemSkin, _super);
	function SkillListItemSkin() {
		_super.call(this);
		this.skinParts = ["buyBtn","icon","curLv","tips","nameLabel"];
		
		this.height = 318;
		this.width = 154;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.buyBtn_i(),this.icon_i(),this.curLv_i(),this.tips_i(),this.nameLabel_i()];
	}
	var _proto = SkillListItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(15,11,1,2);
		t.source = "wddx_bg_004";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 55;
		t.horizontalCenter = 1;
		t.scale9Grid = new egret.Rectangle(15,11,1,2);
		t.source = "wddx_bg_002";
		t.top = 5;
		t.width = 134;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 148;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,11,1,2);
		t.source = "wddx_bg_002";
		t.top = 70;
		t.width = 134;
		return t;
	};
	_proto.buyBtn_i = function () {
		var t = new MyButton();
		this.buyBtn = t;
		t.bottom = 8;
		t.horizontalCenter = 1;
		t.icon = "wddx_ic_012";
		t.isScale = false;
		t.label = "ProSkillList_1x10";
		t.skinName = "button7Skin";
		t.width = 134;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.height = 100;
		t.horizontalCenter = 1;
		t.source = "wddx_ic_012";
		t.verticalCenter = -38;
		t.width = 100;
		return t;
	};
	_proto.curLv_i = function () {
		var t = new eui.Label();
		this.curLv = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 121;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "LV : 0";
		t.textAlign = "center";
		t.textColor = 0x414b87;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto.tips_i = function () {
		var t = new eui.Label();
		this.tips = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 71;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.lineSpacing = 8;
		t.size = 16;
		t.text = "ProSkillList_2 +5%\nProSkillList_3 +7%";
		t.textAlign = "center";
		t.textColor = 0x414b87;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 48;
		t.horizontalCenter = 0;
		t.lineSpacing = 2;
		t.size = 20;
		t.text = "ProSkillList_4*10000000000";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		t.width = 134;
		t.y = 10;
		return t;
	};
	return SkillListItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/SkillListVeiw.exml'] = window.SkillListVeiwSkin = (function (_super) {
	__extends(SkillListVeiwSkin, _super);
	function SkillListVeiwSkin() {
		_super.call(this);
		this.skinParts = ["container"];
		
		this.height = 318;
		this.width = 640;
		this.elementsContent = [this._Scroller1_i()];
	}
	var _proto = SkillListVeiwSkin.prototype;

	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.viewport = this.container_i();
		return t;
	};
	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.cacheAsBitmap = true;
		t.height = 318;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.paddingLeft = 5;
		return t;
	};
	return SkillListVeiwSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/StartPanel.exml'] = window.StartPanelSkin = (function (_super) {
	__extends(StartPanelSkin, _super);
	var StartPanelSkin$Skin62 = 	(function (_super) {
		__extends(StartPanelSkin$Skin62, _super);
		function StartPanelSkin$Skin62() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartPanelSkin$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wddx_bt_023";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartPanelSkin$Skin62;
	})(eui.Skin);

	var StartPanelSkin$Skin63 = 	(function (_super) {
		__extends(StartPanelSkin$Skin63, _super);
		function StartPanelSkin$Skin63() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartPanelSkin$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "img_gzleft";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartPanelSkin$Skin63;
	})(eui.Skin);

	function StartPanelSkin() {
		_super.call(this);
		this.skinParts = ["uidLabel","animatePos","startBtn","repairBtn","kefuBtn","rankBtn","playBtn","soundLuckBtn","favlistConstainer","aniAdCon0","aniAdCon1","aniAdCon2","tryCon","tryListCon","focusBtn","container"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.container_i()];
	}
	var _proto = StartPanelSkin.prototype;

	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.cacheAsBitmap = true;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.uidLabel_i(),this.animatePos_i(),this.startBtn_i(),this.repairBtn_i(),this.kefuBtn_i(),this.rankBtn_i(),this.playBtn_i(),this.soundLuckBtn_i(),this.favlistConstainer_i(),this.aniAdCon0_i(),this.aniAdCon1_i(),this.aniAdCon2_i(),this.tryCon_i(),this.tryListCon_i(),this.focusBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "wddx_bg_024";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 204;
		t.horizontalCenter = 0.5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "logo_png";
		t.verticalCenter = -398;
		t.width = 361;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 18;
		t.horizontalCenter = 14;
		t.source = "wddx_bg_025";
		t.verticalCenter = -53;
		t.width = 160;
		return t;
	};
	_proto.uidLabel_i = function () {
		var t = new eui.Label();
		this.uidLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 48;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "id:1";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 200;
		t.x = 12.96;
		t.y = 48.33;
		return t;
	};
	_proto.animatePos_i = function () {
		var t = new eui.Image();
		this.animatePos = t;
		t.alpha = 1;
		t.height = 202;
		t.horizontalCenter = 0.5;
		t.source = "wddx_role_genren";
		t.verticalCenter = -153;
		t.width = 151;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new MyButton();
		this.startBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 142;
		t.horizontalCenter = 0;
		t.icon = "wddx_bt_017";
		t.isScale = false;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "button4Skin";
		t.verticalCenter = 64;
		t.width = 318;
		return t;
	};
	_proto.repairBtn_i = function () {
		var t = new MyButton();
		this.repairBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.horizontalCenter = 239;
		t.icon = "wddx_bt_017";
		t.isScale = false;
		t.label = "ProStart_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "button3Skin";
		t.verticalCenter = 124;
		t.visible = false;
		t.width = 120;
		return t;
	};
	_proto.kefuBtn_i = function () {
		var t = new MyButton();
		this.kefuBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = -161;
		t.icon = "wddx_bt_014";
		t.label = "";
		t.skinName = "button8Skin";
		t.verticalCenter = 244;
		t.visible = false;
		t.width = 112;
		return t;
	};
	_proto.rankBtn_i = function () {
		var t = new MyButton();
		this.rankBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 156;
		t.horizontalCenter = -50;
		t.icon = "wddx_bt_015";
		t.label = "";
		t.skinName = "button8Skin";
		t.verticalCenter = 245;
		t.visible = false;
		t.width = 124;
		t.x = 232;
		return t;
	};
	_proto.playBtn_i = function () {
		var t = new MyButton();
		this.playBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 114;
		t.horizontalCenter = 36;
		t.label = "";
		t.verticalCenter = 217;
		t.width = 138;
		t.skinName = StartPanelSkin$Skin62;
		return t;
	};
	_proto.soundLuckBtn_i = function () {
		var t = new SoundLuckBtn();
		this.soundLuckBtn = t;
		t.horizontalCenter = 173.5;
		t.label = "";
		t.verticalCenter = 226;
		return t;
	};
	_proto.favlistConstainer_i = function () {
		var t = new eui.Group();
		this.favlistConstainer = t;
		t.anchorOffsetX = 0.5;
		t.anchorOffsetY = 0.5;
		t.height = 120;
		t.horizontalCenter = 0;
		t.verticalCenter = 391;
		t.percentWidth = 100;
		return t;
	};
	_proto.aniAdCon0_i = function () {
		var t = new eui.Group();
		this.aniAdCon0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.verticalCenter = -153;
		t.width = 30;
		t.x = 0;
		return t;
	};
	_proto.aniAdCon1_i = function () {
		var t = new eui.Group();
		this.aniAdCon1 = t;
		t.anchorOffsetX = 1;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.verticalCenter = -153;
		t.width = 30;
		t.x = 601;
		return t;
	};
	_proto.aniAdCon2_i = function () {
		var t = new eui.Group();
		this.aniAdCon2 = t;
		t.anchorOffsetX = 1;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.top = 208;
		t.width = 30;
		t.x = 601;
		return t;
	};
	_proto.tryCon_i = function () {
		var t = new eui.Group();
		this.tryCon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.top = 300;
		t.width = 30;
		t.x = 0;
		return t;
	};
	_proto.tryListCon_i = function () {
		var t = new eui.Group();
		this.tryListCon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.top = 154;
		t.width = 30;
		t.x = 600;
		return t;
	};
	_proto.focusBtn_i = function () {
		var t = new MyButton();
		this.focusBtn = t;
		t.height = 64;
		t.label = "";
		t.right = 0;
		t.top = 326;
		t.visible = false;
		t.skinName = StartPanelSkin$Skin63;
		return t;
	};
	return StartPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/UnlockPLayer.exml'] = window.UnlockPLayerSkin = (function (_super) {
	__extends(UnlockPLayerSkin, _super);
	var UnlockPLayerSkin$Skin64 = 	(function (_super) {
		__extends(UnlockPLayerSkin$Skin64, _super);
		function UnlockPLayerSkin$Skin64() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UnlockPLayerSkin$Skin64.prototype;

		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 22;
			t.textColor = 0xA59595;
			t.verticalCenter = -3;
			return t;
		};
		return UnlockPLayerSkin$Skin64;
	})(eui.Skin);

	var UnlockPLayerSkin$Skin65 = 	(function (_super) {
		__extends(UnlockPLayerSkin$Skin65, _super);
		function UnlockPLayerSkin$Skin65() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UnlockPLayerSkin$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(20,0,0,79);
			t.source = "wddx_bt_007";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 30;
			t.textColor = 0x872011;
			t.verticalCenter = -3;
			return t;
		};
		return UnlockPLayerSkin$Skin65;
	})(eui.Skin);

	function UnlockPLayerSkin() {
		_super.call(this);
		this.skinParts = ["runBg","roleContainer","tishi","closeBtn","getBtn","aniAdCon0","aniAdCon1"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.runBg_i(),this._Image1_i(),this._Image2_i(),this.roleContainer_i(),this.tishi_i(),this.closeBtn_i(),this.getBtn_i(),this.aniAdCon0_i(),this.aniAdCon1_i()];
	}
	var _proto = UnlockPLayerSkin.prototype;

	_proto.runBg_i = function () {
		var t = new eui.Image();
		this.runBg = t;
		t.anchorOffsetX = 381.5;
		t.anchorOffsetY = 332.5;
		t.horizontalCenter = 0.5;
		t.source = "wddx_light_001_png";
		t.verticalCenter = -104.5;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 101;
		t.anchorOffsetY = 101;
		t.height = 101;
		t.horizontalCenter = 0;
		t.source = "wddx_ft_009";
		t.verticalCenter = -381.5;
		t.width = 318;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.horizontalCenter = 0.5;
		t.source = "wddx_bg_0018";
		t.verticalCenter = 121.5;
		t.width = 435;
		return t;
	};
	_proto.roleContainer_i = function () {
		var t = new eui.Group();
		this.roleContainer = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = -105;
		t.width = 200;
		return t;
	};
	_proto.tishi_i = function () {
		var t = new eui.Label();
		this.tishi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "ProUnlockPlayer_1";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 119;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MyButton();
		this.closeBtn = t;
		t.height = 79;
		t.horizontalCenter = -11;
		t.label = "ProUnlockPlayer_2";
		t.verticalCenter = 266.5;
		t.width = 200;
		t.skinName = UnlockPLayerSkin$Skin64;
		return t;
	};
	_proto.getBtn_i = function () {
		var t = new MyButton();
		this.getBtn = t;
		t.height = 79;
		t.horizontalCenter = -11;
		t.label = "ProUnlockPlayer_3";
		t.verticalCenter = 211.5;
		t.width = 200;
		t.x = 10;
		t.skinName = UnlockPLayerSkin$Skin65;
		return t;
	};
	_proto.aniAdCon0_i = function () {
		var t = new eui.Group();
		this.aniAdCon0 = t;
		t.height = 30;
		t.width = 30;
		t.x = 0;
		t.y = 270;
		return t;
	};
	_proto.aniAdCon1_i = function () {
		var t = new eui.Group();
		this.aniAdCon1 = t;
		t.height = 30;
		t.width = 30;
		t.x = 605;
		t.y = 270;
		return t;
	};
	return UnlockPLayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiSkin/VipPanel.exml'] = window.VipPanelSkin = (function (_super) {
	__extends(VipPanelSkin, _super);
	var VipPanelSkin$Skin66 = 	(function (_super) {
		__extends(VipPanelSkin$Skin66, _super);
		function VipPanelSkin$Skin66() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VipPanelSkin$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(20,0,0,111);
			t.source = "wddx_bt_009";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 24;
			t.textColor = 0xA22C11;
			t.verticalCenter = 0;
			return t;
		};
		return VipPanelSkin$Skin66;
	})(eui.Skin);

	var VipPanelSkin$Skin67 = 	(function (_super) {
		__extends(VipPanelSkin$Skin67, _super);
		function VipPanelSkin$Skin67() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VipPanelSkin$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(20,0,0,79);
			t.source = "wddx_bt_007";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 30;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return VipPanelSkin$Skin67;
	})(eui.Skin);

	var VipPanelSkin$Skin68 = 	(function (_super) {
		__extends(VipPanelSkin$Skin68, _super);
		function VipPanelSkin$Skin68() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VipPanelSkin$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wddx_bt_033";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return VipPanelSkin$Skin68;
	})(eui.Skin);

	var VipPanelSkin$Skin69 = 	(function (_super) {
		__extends(VipPanelSkin$Skin69, _super);
		function VipPanelSkin$Skin69() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VipPanelSkin$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wddx_bt_033";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return VipPanelSkin$Skin69;
	})(eui.Skin);

	function VipPanelSkin() {
		_super.call(this);
		this.skinParts = ["www_381","www_382","www_383","bkCon","favList","aniAdCon","viplevel","notice","viplevelImage","www_385","www_386","headConstainer","shareBtn","onceRewardLabel","getBtn","rewardLabel","www_394","leftBtn","rightBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i(),this._Group4_i(),this._Scroller1_i(),this._Group6_i(),this.leftBtn_i(),this.rightBtn_i()];
	}
	var _proto = VipPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 607.31;
		t.horizontalCenter = 0;
		t.verticalCenter = -111.5;
		t.width = 560;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.www_381_i(),this.www_382_i(),this.www_383_i(),this.bkCon_i(),this.favList_i(),this.aniAdCon_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(184,76,1,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0012";
		t.percentWidth = 100;
		t.y = 12;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 56;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(45,0,0,59);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0014";
		t.width = 275;
		t.y = 27.4;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 299.35;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(19,16,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_0013";
		t.verticalCenter = 74.84500000000003;
		t.width = 482.67;
		t.y = 59;
		return t;
	};
	_proto.www_381_i = function () {
		var t = new eui.Label();
		this.www_381 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "ProVip_1";
		t.textAlign = "center";
		t.width = 200;
		t.y = 40.09;
		return t;
	};
	_proto.www_382_i = function () {
		var t = new eui.Label();
		this.www_382 = t;
		t.anchorOffsetX = 0;
		t.bottom = 37.309999999999945;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "ProVip_2";
		t.textAlign = "center";
		t.width = 300;
		return t;
	};
	_proto.www_383_i = function () {
		var t = new eui.Label();
		this.www_383 = t;
		t.anchorOffsetX = 0;
		t.bottom = 13.309999999999945;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "ProVip_3";
		t.textAlign = "center";
		t.textColor = 0x60ea0e;
		t.width = 500;
		return t;
	};
	_proto.bkCon_i = function () {
		var t = new eui.Group();
		this.bkCon = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 600;
		t.x = 0;
		t.y = 640;
		return t;
	};
	_proto.favList_i = function () {
		var t = new eui.Group();
		this.favList = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 600;
		t.y = 743.92;
		return t;
	};
	_proto.aniAdCon_i = function () {
		var t = new eui.Group();
		this.aniAdCon = t;
		t.height = 30;
		t.horizontalCenter = -54;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 101;
		t.width = 30;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 200;
		t.horizontalCenter = 0;
		t.width = 496;
		t.y = 275.42;
		t.elementsContent = [this.viplevel_i(),this.notice_i(),this._Image4_i(),this.viplevelImage_i(),this.headConstainer_i(),this.shareBtn_i()];
		return t;
	};
	_proto.viplevel_i = function () {
		var t = new eui.Label();
		this.viplevel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -107;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "VIP1";
		t.textAlign = "left";
		t.textColor = 0xf4af18;
		t.verticalCenter = 37;
		t.width = 200;
		t.x = 148;
		t.y = 220;
		return t;
	};
	_proto.notice_i = function () {
		var t = new eui.Label();
		this.notice = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "ProVip_4";
		t.textAlign = "center";
		t.textColor = 0x77f218;
		t.verticalCenter = -21;
		t.width = 200;
		t.x = 158;
		t.y = 230;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 112;
		t.source = "wddx_ic_031";
		t.width = 172;
		t.x = 0.98;
		t.y = -20.5;
		return t;
	};
	_proto.viplevelImage_i = function () {
		var t = new eui.Image();
		this.viplevelImage = t;
		t.height = 33;
		t.source = "wddx_ft_010";
		t.width = 97;
		t.x = 38.89;
		t.y = 46.56;
		return t;
	};
	_proto.headConstainer_i = function () {
		var t = new eui.Group();
		this.headConstainer = t;
		t.height = 98;
		t.width = 496;
		t.x = 2.68;
		t.y = -18.33;
		t.elementsContent = [this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 98;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 90;
		t.x = 406.68;
		t.y = -3;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i(),this.www_385_i(),this._Image8_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.scale9Grid = new egret.Rectangle(17,17,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_036";
		t.width = 90;
		t.x = 1;
		t.y = 6.27;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.scale9Grid = new egret.Rectangle(17,17,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_037";
		t.width = 90;
		t.x = 1;
		t.y = 6.25;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 49;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_035";
		t.verticalCenter = 0.5;
		t.width = 49;
		t.y = 25;
		return t;
	};
	_proto.www_385_i = function () {
		var t = new eui.Label();
		this.www_385 = t;
		t.anchorOffsetX = 0;
		t.bottom = 16;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "ProVip_5";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 80;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 75;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(17,17,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0.5;
		t.width = 75;
		t.y = 12;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 98;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 90;
		t.x = 296.99;
		t.y = -3;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Image11_i(),this.www_386_i(),this._Image12_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.scale9Grid = new egret.Rectangle(17,17,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_036";
		t.width = 90;
		t.x = 1;
		t.y = 6.27;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.scale9Grid = new egret.Rectangle(17,17,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_037";
		t.width = 90;
		t.x = 1;
		t.y = 6.25;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 49;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wddx_bg_035";
		t.verticalCenter = 0.5;
		t.width = 49;
		t.y = 25;
		return t;
	};
	_proto.www_386_i = function () {
		var t = new eui.Label();
		this.www_386 = t;
		t.anchorOffsetX = 0;
		t.bottom = 16;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "ProVip_6";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 80;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 75;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(17,17,2,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0.5;
		t.width = 75;
		t.y = 12;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new MyButton();
		this.shareBtn = t;
		t.height = 61;
		t.label = "ProVip_7";
		t.right = 209;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -69.5;
		t.width = 97.2;
		t.x = 417.8;
		t.y = 20;
		t.skinName = VipPanelSkin$Skin66;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 220;
		t.horizontalCenter = -17;
		t.width = 496;
		t.y = 444.5;
		t.viewport = this._Group5_i();
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 220;
		t.width = 496;
		t.elementsContent = [this.onceRewardLabel_i()];
		return t;
	};
	_proto.onceRewardLabel_i = function () {
		var t = new eui.Label();
		this.onceRewardLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "1.ProVip_8\n2ProVip_9\n3.ProVip_10\n4.ProVip_11\n5.ProVip_12";
		t.textAlign = "left";
		t.width = 400;
		t.x = 50;
		t.y = 5.32;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 166.67;
		t.horizontalCenter = 132.5;
		t.width = 213.33;
		t.y = 470.05;
		t.elementsContent = [this.getBtn_i(),this.rewardLabel_i(),this.www_394_i(),this._Image13_i()];
		return t;
	};
	_proto.getBtn_i = function () {
		var t = new MyButton();
		this.getBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 91.67;
		t.label = "ProVip_13";
		t.right = 50.33000000000001;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -78.335;
		t.width = 99.87;
		t.x = 373.8;
		t.skinName = VipPanelSkin$Skin67;
		return t;
	};
	_proto.rewardLabel_i = function () {
		var t = new eui.Label();
		this.rewardLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 54.334999999999994;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "x200";
		t.textAlign = "left";
		t.textColor = 0x64e204;
		t.verticalCenter = 45.665000000000006;
		t.width = 100;
		t.x = 22;
		return t;
	};
	_proto.www_394_i = function () {
		var t = new eui.Label();
		this.www_394 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 43.334999999999994;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "(ProVip_14)";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalCenter = -5.334999999999994;
		t.width = 200;
		t.x = 22;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 37;
		t.source = "wddx_ic_016";
		t.width = 37;
		t.x = 62.99;
		t.y = 113.67;
		return t;
	};
	_proto.leftBtn_i = function () {
		var t = new MyButton();
		this.leftBtn = t;
		t.anchorOffsetX = 0;
		t.label = "";
		t.left = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -33.5;
		t.width = 67;
		t.skinName = VipPanelSkin$Skin68;
		return t;
	};
	_proto.rightBtn_i = function () {
		var t = new MyButton();
		this.rightBtn = t;
		t.anchorOffsetX = 0;
		t.label = "";
		t.right = 5;
		t.scaleX = -1;
		t.scaleY = 1;
		t.verticalCenter = -34.5;
		t.width = 67;
		t.skinName = VipPanelSkin$Skin69;
		return t;
	};
	return VipPanelSkin;
})(eui.Skin);