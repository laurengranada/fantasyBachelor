<template>
  <div class="main">
    <div class="main-ctnr" v-for="(item, index) in aPlayers" :key="index">
      <v-slide-x-transition>
        <div class="main-ctnr-body" v-show="item.bShow">
          <h2 class="main-ctnr-player">{{ item.name }}'s Bracket:</h2>
          <v-layout row wrap class="mc-wk justify-center">
            <v-flex xs1 class="mc-wk-ctnr" v-for="(bracket, index) in item.brackets" :key="index" @click="bracket.bExpand = !bracket.bExpand" :class="[{ 'mc-wk-ctnr-hidden': !bracket.bExpand }]">
              <h3 class="mc-wk-ctnr-ttl">Week {{ index }}</h3>
              <v-slide-x-transition>
                <div row wrap class="mc-wk-ctnr-innr" v-show="bracket.bExpand">
                  <div class="mwci-contestant" v-for="(cntst, index) in bracket.contestants" :key="index">
                    <p v-if="cntst.eliminated" class="mwci-contestant-elim">{{ cntst.name }}</p>
                    <p v-else class="mwci-contestant">{{ cntst.name }}</p>
                  </div>
                </div>
              </v-slide-x-transition>
              <hr class="mc-wk-ctnr-div">
              <h3 class="mc-wk-ctnr-score">Score: {{ bracket.score }}</h3>
            </v-flex>
          </v-layout>
        </div>
      </v-slide-x-transition>
      <div class="main-ctnr-sum" @click="item.bShow = !item.bShow" :class="[{ 'main-ctnr-sum-hidden': !item.bShow }]">
        <h2 v-show="!item.bShow" class="mcs-plyr" :class="[{ 'mcs-plyr-hidden': !item.bShow }]">{{ item.name }}'s Bracket - </h2>
        <h2 class="mcs-num" :class="[{ 'mcs-plyr-hidden': !item.bShow }]">Total Score: {{ item.totalScore }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      oPoints: {
        2: 1,
        3: 2,
        4: 3,
        5: 4,
        6: 6,
        7: 10,
        8: 15,
        9: 20,
        10: 30
      },
      oEliminated: {
        2: [
          'Alex B.',
          'Annie',
          'Erika',
          'Angelique'
        ],
        3: [
          'Caitlin',
          'Catherine',
          'Nina',
          'Bri'
        ],
        4: [
          'Courtney',
          'Tracy'
        ],
        5: [
          'Elyse',
          'Onyeka',
          'Nicole'
        ],
        6: [
          'Katie',
          'Sydney',
          'Demi'
        ]
      },
      aPlayers: [
        { bShow: false,
          name: 'Lauren',
          totalScore: 0,
          brackets: {
            2: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Bri',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }, {
                name: 'Onyeka',
                eliminated: false
              }, {
                name: 'Annie',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Erika',
                eliminated: false
              }, {
                name: 'Sydney',
                eliminated: false
              }, {
                name: 'Nicole',
                eliminated: false
              }]
            },
            3: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Bri',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }, {
                name: 'Onyeka',
                eliminated: false
              }, {
                name: 'Annie',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }]
            },
            4: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Bri',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Onyeka',
                eliminated: false
              }, {
                name: 'Annie',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }]
            },
            5: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Bri',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Annie',
                eliminated: false
              }]
            },
            6: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Bri',
                eliminated: false
              }]
            },
            7: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }]
            },
            8: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }]
            },
            9: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }]
            },
            10: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }]
            }
          }
        }, {
          bShow: false,
          name: 'Sharon',
          totalScore: 0,
          brackets: {
            2: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Catherine',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }, {
                name: 'Erika',
                eliminated: false
              }, {
                name: 'Bri',
                eliminated: false
              }, {
                name: 'Annie',
                eliminated: false
              }, {
                name: 'Nina',
                eliminated: false
              }, {
                name: 'Sydney',
                eliminated: false
              }, {
                name: 'Nicole',
                eliminated: false
              }]
            },
            3: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Catherine',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Bri',
                eliminated: false
              }, {
                name: 'Erika',
                eliminated: false
              }]
            },
            4: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Catherine',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }]
            },
            5: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }]
            },
            6: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }]
            },
            7: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }]
            },
            8: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }]
            },
            9: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }]
            },
            10: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }]
            }
          }
        }, {
          bShow: false,
          name: 'Katie',
          totalScore: 0,
          brackets: {
            2: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Tracy',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }, {
                name: 'Erika',
                eliminated: false
              }, {
                name: 'Onyeka',
                eliminated: false
              }, {
                name: 'Catherine',
                eliminated: false
              }, {
                name: 'Courtney',
                eliminated: false
              }, {
                name: 'Nicole',
                eliminated: false
              }, {
                name: 'Sydney',
                eliminated: false
              }]
            },
            3: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Tracy',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Onyeka',
                eliminated: false
              }, {
                name: 'Catherine',
                eliminated: false
              }]
            },
            4: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Tracy',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }]
            },
            5: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Tracy',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }]
            },
            6: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }]
            },
            7: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }]
            },
            8: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }]
            },
            9: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }]
            },
            10: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }]
            }
          }
        }, {
          bShow: false,
          name: 'Laurie',
          totalScore: 0,
          brackets: {
            2: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Sydney',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Courtney',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Bri',
                eliminated: false
              }, {
                name: 'Onyeka',
                eliminated: false
              }, {
                name: 'Nina',
                eliminated: false
              }, {
                name: 'Catherine',
                eliminated: false
              }, {
                name: 'Annie',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }]
            },
            3: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Sydney',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Courtney',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Bri',
                eliminated: false
              }, {
                name: 'Onyeka',
                eliminated: false
              }, {
                name: 'Nina',
                eliminated: false
              }]
            },
            4: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Sydney',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Courtney',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }]
            },
            5: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Sydney',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }]
            },
            6: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Sydney',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }]
            },
            7: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }]
            },
            8: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }]
            },
            9: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }]
            },
            10: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }]
            }
          }
        }, {
          bShow: false,
          name: 'Kate',
          totalScore: 0,
          brackets: {
            2: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Nicole',
                eliminated: false
              }, {
                name: 'Bri',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Sydney',
                eliminated: false
              }, {
                name: 'Courtney',
                eliminated: false
              }, {
                name: 'Erika',
                eliminated: false
              }, {
                name: 'Catherine',
                eliminated: false
              }, {
                name: 'Angelique',
                eliminated: false
              }, {
                name: 'Onyeka',
                eliminated: false
              }, {
                name: 'Annie',
                eliminated: false
              }]
            },
            3: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Nicole',
                eliminated: false
              }, {
                name: 'Bri',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Sydney',
                eliminated: false
              }, {
                name: 'Courtney',
                eliminated: false
              }, {
                name: 'Erika',
                eliminated: false
              }, {
                name: 'Catherine',
                eliminated: false
              }]
            },
            4: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Nicole',
                eliminated: false
              }, {
                name: 'Bri',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Sydney',
                eliminated: false
              }]
            },
            5: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Nicole',
                eliminated: false
              }, {
                name: 'Bri',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }]
            },
            6: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Nicole',
                eliminated: false
              }, {
                name: 'Bri',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }]
            },
            7: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Nicole',
                eliminated: false
              }]
            },
            8: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }]
            },
            9: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Hannah G.',
                eliminated: false
              }]
            },
            10: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Caelynn',
                eliminated: false
              }]
            }
          }
        }, {
          bShow: false,
          name: 'Patti',
          totalScore: 0,
          brackets: {
            2: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Tracy',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Courtney',
                eliminated: false
              }, {
                name: 'Nicole',
                eliminated: false
              }, {
                name: 'Catherine',
                eliminated: false
              }, {
                name: 'Annie',
                eliminated: false
              }, {
                name: 'Erika',
                eliminated: false
              }, {
                name: 'Bri',
                eliminated: false
              }]
            },
            3: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Tracy',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Courtney',
                eliminated: false
              }, {
                name: 'Nicole',
                eliminated: false
              }, {
                name: 'Catherine',
                eliminated: false
              }]
            },
            4: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Tracy',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }]
            },
            5: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }]
            },
            6: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }]
            },
            7: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }]
            },
            8: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }]
            },
            9: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Hannah G.',
                eliminated: false
              }]
            },
            10: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Cassie',
                eliminated: false
              }]
            }
          }
        }, {
          bShow: false,
          name: 'Kayla',
          totalScore: 0,
          brackets: {
            2: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Bri',
                eliminated: false
              }, {
                name: 'Annie',
                eliminated: false
              }, {
                name: 'Sydney',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }, {
                name: 'Nicole',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Tracy',
                eliminated: false
              }, {
                name: 'Erika',
                eliminated: false
              }, {
                name: 'Catherine',
                eliminated: false
              }]
            },
            3: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Bri',
                eliminated: false
              }, {
                name: 'Annie',
                eliminated: false
              }, {
                name: 'Sydney',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }, {
                name: 'Nicole',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }]
            },
            4: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Bri',
                eliminated: false
              }, {
                name: 'Annie',
                eliminated: false
              }, {
                name: 'Sydney',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }, {
                name: 'Elyse',
                eliminated: false
              }]
            },
            5: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Bri',
                eliminated: false
              }, {
                name: 'Annie',
                eliminated: false
              }, {
                name: 'Sydney',
                eliminated: false
              }]
            },
            6: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }]
            },
            7: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }]
            },
            8: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Alex B.',
                eliminated: false
              }]
            },
            9: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }]
            },
            10: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }]
            }
          }
        }, {
          bShow: false,
          name: 'Grace & Eric',
          totalScore: 0,
          brackets: {
            2: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Erika',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Catherine',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Nina',
                eliminated: false
              }, {
                name: 'Courtney',
                eliminated: false
              }, {
                name: 'Onyeka',
                eliminated: false
              }, {
                name: 'Sydney',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }, {
                name: 'Annie',
                eliminated: false
              }, {
                name: 'Nicole',
                eliminated: false
              }, {
                name: 'Heather',
                eliminated: false
              }]
            },
            3: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Erika',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Catherine',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Nina',
                eliminated: false
              }, {
                name: 'Courtney',
                eliminated: false
              }, {
                name: 'Onyeka',
                eliminated: false
              }, {
                name: 'Sydney',
                eliminated: false
              }, {
                name: 'Demi',
                eliminated: false
              }, {
                name: 'Kirpa',
                eliminated: false
              }, {
                name: 'Tayshia',
                eliminated: false
              }]
            },
            4: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Erika',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Catherine',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Nina',
                eliminated: false
              }, {
                name: 'Courtney',
                eliminated: false
              }, {
                name: 'Onyeka',
                eliminated: false
              }, {
                name: 'Sydney',
                eliminated: false
              }]
            },
            5: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Erika',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }, {
                name: 'Catherine',
                eliminated: false
              }, {
                name: 'Katie',
                eliminated: false
              }, {
                name: 'Nina',
                eliminated: false
              }]
            },
            6: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }, {
                name: 'Erika',
                eliminated: false
              }, {
                name: 'Caitlin',
                eliminated: false
              }]
            },
            7: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }, {
                name: 'Cassie',
                eliminated: false
              }]
            },
            8: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }, {
                name: 'Hannah B.',
                eliminated: false
              }]
            },
            9: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Hannah G.',
                eliminated: false
              }, {
                name: 'Caelynn',
                eliminated: false
              }]
            },
            10: {
              bExpand: false,
              score: 0,
              bScoreAdded: false,
              contestants: [{
                name: 'Caelynn',
                eliminated: false
              }]
            }
          }
        }
      ]
    }
  },
  methods: {
    checkEliminated: function (iCurWeek) {
      var that = this
      return new Promise(function (resolve, reject) {
        that.aPlayers.forEach(el => {
          for (var i = 0; i < el.brackets[iCurWeek].contestants.length; i++) {
            for (var j = 0; j < that.oEliminated[iCurWeek].length; j++) {
              if (el.brackets[iCurWeek].contestants[i].name === that.oEliminated[iCurWeek][j]) {
                el.brackets[iCurWeek].contestants[i].eliminated = true
              }
            }
            var iWkAfter = iCurWeek + i
            that.fCheckAllWeeksAfter(el, iWkAfter, iCurWeek)
          }
        })
        that.fCountWkPts(iCurWeek)
        resolve()
      })
    },
    fCountWkPts: function (iCurWeek) {
      this.aPlayers.forEach(el => {
        let oObjToCom = el.brackets[iCurWeek]
        for (var i = 0; i < oObjToCom.contestants.length; i++) {
          if (oObjToCom.contestants[i].eliminated === false) {
            oObjToCom.score = oObjToCom.score + this.oPoints[iCurWeek]
          }
        }
        Object.keys(el.brackets).forEach(function (item) {
          if (el.brackets[item].bScoreAdded === false) {
            el.totalScore = el.totalScore + el.brackets[item].score
            if (el.brackets[item].score !== 0) {
              el.brackets[item].bScoreAdded = true
            }
          }
          // el.totalScore = el.totalScore + el.brackets[item].score
          // el.brackets[item].bScoreAdded = true
        })
      })
    },
    fCheckAllWeeksAfter: function (el, iWkAfter, iCurWeek) {
      if (typeof el.brackets[iWkAfter] !== 'undefined') {
        for (var i = 0; i < el.brackets[iWkAfter].contestants.length; i++) {
          for (var j = 0; j < this.oEliminated[iCurWeek].length; j++) {
            if (el.brackets[iWkAfter].contestants[i].name === this.oEliminated[iCurWeek][j]) {
              el.brackets[iWkAfter].contestants[i].eliminated = true
            }
          }
        }
      }
    }
  },
  created: function () {
    this.checkEliminated(2).then(this.checkEliminated(3)).then(this.checkEliminated(4))
    .then(this.checkEliminated(5)).then(this.checkEliminated(6))
  }
}
</script>

<style lang="scss" scoped>
.main{
  padding: 2%;
  .main-ctnr{
    box-sizing: border-box;
    margin-bottom: 1rem;
    background-color: #2c2c2c;
    .main-ctnr-body{
      padding: 1rem;
      .main-ctnr-player{
        color:white;
        font-weight: 300;
        padding-bottom: 1rem;
      }
      .mc-wk{
        text-align: center;
        .mc-wk-ctnr-hidden{
          max-height: 2rem;
        }
        .mc-wk-ctnr{
          cursor: pointer;
          background-color: white;
          margin: 1rem;
          min-width: 7rem;
          .mc-wk-ctnr-ttl{
            background-color: white;
          }
          .mc-wk-ctnr-innr{
            color: black;
            background-color: #616161;
            padding-bottom: 1rem;
            padding-top: 1rem;
            height: 29rem;
            .mwci-contestant{
              color: white;
              padding: 0px;
              margin: 0px;
            }
            .mwci-contestant-elim{
              text-decoration: line-through;
              text-decoration-color: red;
              color: rgb(150, 150, 150);
              padding: 0px;
              margin: 0px;
            }
          }
          .mc-wk-ctnr-score{
            background-color: white;
          }
        }
      }
    }
    .main-ctnr-sum-hidden{
      cursor: pointer;
      background-color: #2c2c2c !important;
      .mcs-plyr-hidden{
        line-height: 50px;
        font-weight: 300;
        color: white !important;
      }
    }
    .main-ctnr-sum{
      // display: inline;
      cursor: pointer;
      margin-top: 1rem;
      background-color: #B71C1C;
      text-align: center;
      .mcs-plyr{
        display: inline;
      }
      .mcs-num{
        display: inline;
      }
    }
  }
}

</style>
