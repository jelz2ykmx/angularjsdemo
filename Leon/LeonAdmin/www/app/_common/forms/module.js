(function(){
    "use strict";

    angular.module('SmartAdmin.Forms', ['angular-datepicker', 'ui.utils.masks']);


    app.factory('UserProviderFactory', function () {
        return {
            copy: function (email, userId) {
                return angular.extend({ email: email, userId: userId }, this);
            }
        };

    });

    app.factory('RegisterUserFactory', function () {
        return {
            copy: function (email, password, role) {
                return angular.extend({ email: email, password: password, role: role }, this);
            }
        };

    });

    app.factory('ChangePasswordFactory', function () {
        return {
            copy: function (userId, OldPassword, NewPassword) {
                return angular.extend({ userId: userId, OldPassword: OldPassword, NewPassword: NewPassword }, this);
            }
        };

    });

    app.factory('queryQuestionFactory', function () {
        return {
            copy: function (id, email, firstName, lastName) {
                return angular.extend({ id: id, email: email, firstName: firstName, lastName: lastName }, this);
            }
        };

    });

    app.factory('queryQuestionTempFactory', function () {
        return {
            copy: function (phoneType, countQ, totalQ, pageQ) {
                return angular.extend({ phoneType: phoneType, countQ: countQ, totalQ: totalQ, pageQ: pageQ }, this);
            }
        };

    });
   

    app.factory('questionFactory', function () {
        return {
            copy: function (

                idform, email, userid, total1, total2, total3, grantotal, conversiontotal, datelocal,

                Gender, Age, HowHeightFeet, HowHeightInchs, HowWeight, CardioVascularHealth,
                ChestPain, FatherDiagnosed, MotherDiagnosed, Diabetes, ModerateExercise, Vigorous, Sitting,
                Smoke, Secondhandsmoke, Alcohol, OralContraceptive, Antibiotics, Systolic, Diastolic,
                WaistMen, HipMen, WaistWomen, HipWomen, SideBridgeMen, SideBridgeWomen, DeepSquat, ActiveStraightLegRaise,
                ShoulderMobility, ShoulderClearingTest, SpinalFlexion, SpinalExtension, PushuptestMen, 
                PushuptestModifiedWomen, PushuptestWomen, PushuptestWomenModified, MBThrowMen, MBThrowWomen,
                CoopertestMen, CoopertestWomen, RateFitness, RankFitness, Particpe, 

                Genderpts, Agepts, HowHeightpts, HowWeightpts, CardioVascularHealthpts,
                ChestPainpts, FatherDiagnosedpts, MotherDiagnosedpts, Diabetespts, ModerateExercisepts, Vigorouspts, Sittingpts,
                Smokepts, Secondhandsmokepts, Alcoholpts, OralContraceptivepts, Antibioticspts, Systolicpts, Diastolicpts,
                WaisttoHipMenpts, WaisttoHipWomenpts, SideBridgeMenpts, SideBridgeWomenpts, DeepSquatpts, ActiveStraightLegRaisepts,
                ShoulderMobilitypts, ShoulderClearingTestpts, SpinalFlexionpts, SpinalExtensionpts, PushuptestMenpts,
                PushuptestModifiedWomenpts, PushuptestWomenpts, PushuptestWomenModifiedpts, MBThrowMenpts, MBThrowWomenpts,
                CoopertestMenpts, CoopertestWomenpts, RateFitnesspts, RankFitnesspts, Particpepts,

                firstname, lastname, Planing, Planingpts, SideBridgeMenLeft, SideBridgeWomenLeft

                ) {
                return angular.extend({

                    idform: idform, email: email, userid: userid, total1: total1, total2: total2, total3: total3, grantotal: grantotal,
                    conversiontotal: conversiontotal, datelocal: datelocal,

                    Gender: Gender, Age: Age, HowHeightFeet: HowHeightFeet, HowHeightInchs: HowHeightInchs, HowWeight: HowWeight,
                    CardioVascularHealth: CardioVascularHealth,
                    ChestPain: ChestPain, FatherDiagnosed: FatherDiagnosed, MotherDiagnosed: MotherDiagnosed, Diabetes: Diabetes,
                    ModerateExercise: ModerateExercise, Vigorous: Vigorous, Sitting: Sitting,
                    Smoke: Smoke, Secondhandsmoke: Secondhandsmoke, Alcohol: Alcohol, OralContraceptive: OralContraceptive, Antibiotics: Antibiotics,
                    Systolic: Systolic, Diastolic: Diastolic,
                    WaistMen: WaistMen, HipMen: HipMen, WaistWomen: WaistWomen, HipWomen: HipWomen, SideBridgeMen: SideBridgeMen, SideBridgeWomen: SideBridgeWomen,
                    DeepSquat: DeepSquat, ActiveStraightLegRaise: ActiveStraightLegRaise,
                    ShoulderMobility: ShoulderMobility, ShoulderClearingTest: ShoulderClearingTest, SpinalFlexion: SpinalFlexion, SpinalExtension: SpinalExtension,
                    PushuptestMen: PushuptestMen,
                    PushuptestModifiedWomen: PushuptestModifiedWomen, PushuptestWomen: PushuptestWomen, PushuptestWomenModified: PushuptestWomenModified,
                    MBThrowMen: MBThrowMen, MBThrowWomen: MBThrowWomen,
                    CoopertestMen: CoopertestMen, CoopertestWomen: CoopertestWomen, RateFitness: RateFitness, RankFitness: RankFitness, Particpe: Particpe,

                    Genderpts: Genderpts, Agepts: Agepts, HowHeightpts: HowHeightpts, HowWeightpts: HowWeightpts,
                    CardioVascularHealthpts: CardioVascularHealthpts,
                    ChestPainpts: ChestPainpts, FatherDiagnosedpts: FatherDiagnosedpts, MotherDiagnosedpts: MotherDiagnosedpts, Diabetespts: Diabetespts,
                    ModerateExercisepts: ModerateExercisepts, Vigorouspts: Vigorouspts, Sittingpts: Sittingpts,
                    Smokepts: Smokepts, Secondhandsmokepts: Secondhandsmokepts, Alcoholpts: Alcoholpts, OralContraceptivepts: OralContraceptivepts,
                    Antibioticspts: Antibioticspts, Systolicpts: Systolicpts, Diastolicpts: Diastolicpts,
                    WaisttoHipMenpts: WaisttoHipMenpts, WaisttoHipWomenpts: WaisttoHipWomenpts, SideBridgeMenpts: SideBridgeMenpts,
                    SideBridgeWomenpts: SideBridgeWomenpts, DeepSquatpts: DeepSquatpts, ActiveStraightLegRaisepts: ActiveStraightLegRaisepts,
                    ShoulderMobilitypts: ShoulderMobilitypts, ShoulderClearingTestpts: ShoulderClearingTestpts, SpinalFlexionpts: SpinalFlexionpts,
                    SpinalExtensionpts: SpinalExtensionpts, PushuptestMenpts: PushuptestMenpts,
                    PushuptestModifiedWomenpts: PushuptestModifiedWomenpts, PushuptestWomenpts: PushuptestWomenpts,
                    PushuptestWomenModifiedpts: PushuptestWomenModifiedpts, MBThrowMenpts: MBThrowMenpts, MBThrowWomenpts: MBThrowWomenpts,
                    CoopertestMenpts: CoopertestMenpts, CoopertestWomenpts: CoopertestWomenpts, RateFitnesspts: RateFitnesspts, RankFitnesspts: RankFitnesspts,
                    Particpepts: Particpepts,

                    firstname: firstname, lastname: lastname, Planing: Planing, Planingpts: Planingpts, SideBridgeMenLeft: SideBridgeMenLeft, SideBridgeWomenLeft: SideBridgeWomenLeft

                }, this);
            }
        };

    });

    app.factory('assementsLast20Factory', function () {
        return {
            copy: function (dateLocal, Name, Age, Score, Percentile, Health, Lifestyle, Biodata, Mobility, Fitness, Assessor, Location ) {
                return angular.extend({
                    dateLocal: dateLocal, Name: Name, Age: Age, Score: Score, Percentile: Percentile, Health: Health, Lifestyle: Lifestyle,
                    Biodata: Biodata, Mobility: Mobility, Fitness: Fitness, Assessor: Assessor, Location: Location,
                }, this);
            }
        };

    });

    app.factory('totalAssementsFactory', function () {
        return {
            copy: function (Total, Score, Locations, Age) {
                return angular.extend({
                    Total: Total, Score: Score, Locations: Locations, Age: Age
                }, this);
            }
        };

    });

    app.factory('assementsTopBottomFactory', function () {
        return {
            copy: function (Score, Age, Health, Lifestyle, Biodata, Mobility, Fitness, Assessor) {
                return angular.extend({
                    Score: Score, Age: Age, Health: Health, Lifestyle: Lifestyle,
                    Biodata: Biodata, Mobility: Mobility, Fitness: Fitness, Assessor: Assessor
                }, this);
            }
        };

    });
   
})();