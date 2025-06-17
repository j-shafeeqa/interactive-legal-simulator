// src/lib/cases.ts

export type ArgOption = {
    text: string;
    quality: 'good' | 'medium' | 'poor';
    feedback: string;
  };
  
  export type Stage = {
    stage: string;
    prompt: string;
    hint?: string;
    arguments: ArgOption[];
  };
  
  export type CaseData = {
    id: string;
    title: string;
    introductionText: string;
    prosecutorOverview: string;
    defenderOverview: string;
    prosecutorStages: Stage[];
    defenderStages: Stage[];
  };
  
  export const cases: CaseData[] = [
    {
      id: 'missing-drone',
      title: 'The Case of the Missing Drone 🛸',
      introductionText: `
  A secondary‑school student flew their personal drone in a public park as part of a school science project. The drone hovered at low altitude, but drifted into a government‑worker’s path and knocked over their coffee cup. No injuries occurred, but the prosecution says this violated UAE drone‑zone regulations and endangered the public.
      `.trim(),
      prosecutorOverview: `
  As Prosecutor you must prove that the student’s flight broke drone regulations and posed a public‑safety risk. Tasks:
  - Craft an opening on key statutory violations.
  - Apply the strongest statute for fines or criminal charges.
  - Present evidence (coffee spill, red‑zone map).
  - Cross‑examine defence witnesses on procedural failures.
  - Close by tying intent and harm to the law.
      `.trim(),
      defenderOverview: `
  As Defender you must create reasonable doubt that the student acted unlawfully or dangerously. Tasks:
  - Open emphasizing educational intent and low altitude.
  - Challenge the prosecution’s choice or interpretation of statutes.
  - Rebut evidence on signage, notice, or actual risk.
  - Cross‑examine prosecution witnesses to undermine “danger” claims.
  - Close on compliance, good faith, and leniency.
      `.trim(),
      prosecutorStages: [
        {
          stage: 'Opening Statement',
          prompt: 'Choose your main opening theme:',
          hint: 'Focus on the heaviest statutory penalty and clear public‑safety breach.',
          arguments: [
            {
              text: '“The defendant flagrantly ignored AED 300 000 penalties by flying unregistered in a red‑zone park.”',
              quality: 'good',
              feedback: 'Excellent—puts maximum penalty front and centre.'
            },
            {
              text: '“Even brief collisions—like spilling a government worker’s coffee—constitute criminal endangerment under Art. 176.”',
              quality: 'medium',
              feedback: 'Good focus on harm but downplays statutory fine.'
            },
            {
              text: '“Low‑altitude flights are still subject to CAR Part VI’s 400 ft ceiling and geofencing rules.”',
              quality: 'medium',
              feedback: 'Technically correct but lacks an immediate penalty hook.'
            },
            {
              text: '“GCAA directives clearly posted this park as restricted; ignorance is no excuse.”',
              quality: 'poor',
              feedback: 'Focuses on notice but omits the strongest criminal penalty.'
            }
          ]
        },
        {
          stage: 'Statute Selection',
          prompt: 'Which statute best supports a criminal charge here?',
          hint: 'Which imposes potential jail time + fine for “public danger”?',
          arguments: [
            {
              text: 'Federal Decree‑Law No. 26 of 2022 – up to AED 300 000 fines.',
              quality: 'poor',
              feedback: 'No jail time—only administrative fines.'
            },
            {
              text: 'GCAA CAR Part VI, Chap. 8 – altitude and line‑of‑sight limits.',
              quality: 'poor',
              feedback: 'Technical rules but no criminal penalty.'
            },
            {
              text: 'Federal Law No. 4 of 1996 – GCAA authority to publish safety directives.',
              quality: 'poor',
              feedback: 'Empowers GCAA but not itself penal.'
            },
            {
              text: 'Art. 176 of Decree‑Law 31/2021 – criminal offence for public danger.',
              quality: 'good',
              feedback: 'Correct—carries jail time and fine for endangering public.'
            }
          ]
        },
        {
          stage: 'Evidence Presentation',
          prompt: 'Which piece of evidence will you introduce first?',
          hint: 'Lay the foundation by proving the area was off‑limits.',
          arguments: [
            {
              text: 'Red‑zone map issued under Federal Law 4/1996, showing the park’s restriction.',
              quality: 'good',
              feedback: 'Proves location was prohibited—solid foundation.'
            },
            {
              text: 'Drone flight log proving it reached 450 ft (above 400 ft limit).',
              quality: 'poor',
              feedback: 'Altitude is secondary to the red‑zone violation.'
            },
            {
              text: 'Coffee spill photo demonstrating actual harm to a government worker.',
              quality: 'medium',
              feedback: 'Shows harm but not the no‑fly zone itself.'
            },
            {
              text: 'Drone registration record showing no valid permit on file.',
              quality: 'medium',
              feedback: 'Good for penalties but you first need the zone violation.'
            }
          ]
        },
        {
          stage: 'Cross-Examination',
          prompt: 'You’re questioning the student witness. They claim “I stayed under 50 ft.” How do you expose that as unreliable?',
          hint: 'Attack the factual basis (voluntary record‑keeping) of their altitude claim.',
          arguments: [
            {
              text: '“Your drone log shows no altitude data for that flight—how can you prove your claim?”',
              quality: 'good',
              feedback: 'Sharp—puts burden of proof on them.'
            },
            {
              text: '“Isn’t it true you never read the GCAA’s red‑zone signage posted at the park entrance?”',
              quality: 'medium',
              feedback: 'Good on notice but leaves altitude claim standing.'
            },
            {
              text: '“Can you explain why you didn’t file for a permit under Decree‑Law 26/2022?”',
              quality: 'medium',
              feedback: 'Valid but sidesteps the altitude question.'
            },
            {
              text: '“Would you agree spilling coffee is trivial and not a ‘public danger’?”',
              quality: 'poor',
              feedback: 'Risks undermining your own endangerment argument.'
            }
          ]
        },
        {
          stage: 'Closing & Verdict',
          prompt: 'Select your closing statement and predicted verdict:',
          arguments: [
            {
              text: '“Given the clear no‑fly signage and unregistered flight, only a criminal penalty under Art. 176 suffices.” • Guilty under Art. 176: 3 months jail + AED 50 000 fine',
              quality: 'good',
              feedback: 'Aligns closing and strongest penalty perfectly.'
            },
            {
              text: '“Spilling coffee shows real‑world danger; fines alone won’t deter future reckless flights.” • Conditional discharge + mandatory training',
              quality: 'medium',
              feedback: 'Good on harm but too lenient on punishment.'
            },
            {
              text: '“This court should dismiss; the defence admits no injuries occurred.” • Not Guilty—case dismissed',
              quality: 'poor',
              feedback: 'Contradicts your own public‑danger argument.'
            }
          ]
        }
      ],
      defenderStages: [
        {
          stage: 'Opening Statement',
          prompt: 'Choose your main opening theme:',
          hint: 'Emphasize compliance and absence of criminal intent.',
          arguments: [
            {
              text: '“My client’s flight was a bona fide school project at under 50 ft—no harm, no foul.”',
              quality: 'good',
              feedback: 'Perfect—frames intent and low risk.'
            },
            {
              text: '“CAR Part VI allows low‑altitude, line‑of‑sight flights in public parks.”',
              quality: 'medium',
              feedback: 'Technically true but misses the no‑fly zone issue.'
            },
            {
              text: '“No valid notice or signage marked this park as a red‑zone.”',
              quality: 'medium',
              feedback: 'May help later but weakens permit discussion.'
            },
            {
              text: '“Art. 176 targets reckless endangerment, not accidental, good‑faith projects.”',
              quality: 'poor',
              feedback: 'Too legalistic—lose the jury’s sympathy.'
            }
          ]
        },
        {
          stage: 'Statute Challenge',
          prompt: 'Which statute will you attack as inapplicable?',
          hint: 'Pick the one that neutralizes the core charge.',
          arguments: [
            {
              text: 'Decree‑Law 26/2022 – only penalizes unregistered commercial flights, not school projects.',
              quality: 'poor',
              feedback: 'Commercial vs. educational is arguable—but weak.'
            },
            {
              text: 'CAR Part VI – client stayed under the 400 ft ceiling at all times.',
              quality: 'poor',
              feedback: 'Irrelevant once the no‑fly zone is established.'
            },
            {
              text: 'Law 4/1996 – red‑zone map not legally binding without park notice.',
              quality: 'medium',
              feedback: 'Stronger on notice—but risky to dispute published law.'
            },
            {
              text: 'Art. 176 – “public danger” requires actual injury or risk, not a coffee spill.',
              quality: 'good',
              feedback: 'Targets the heart of the criminal charge.'
            }
          ]
        },
        {
          stage: 'Evidence Rebuttal',
          prompt: 'Which item do you introduce to cast doubt on prosecution’s claim?',
          hint: 'Tie evidence to altitude, notice or intent.',
          arguments: [
            {
              text: 'Drone‑flight telemetry showing max altitude 48 ft.',
              quality: 'good',
              feedback: 'Directly undercuts altitude allegation.'
            },
            {
              text: 'School project brief signed by a teacher authorizing low‑altitude flight.',
              quality: 'medium',
              feedback: 'Shows intent but not zone legality.'
            },
            {
              text: 'Photographs of signage confirming no red‑zone warning at take‑off point.',
              quality: 'medium',
              feedback: 'Helps on notice but risky if map exists elsewhere.'
            },
            {
              text: 'Expert report on drone‑coffee collision risk (negligible force).',
              quality: 'poor',
              feedback: 'Sidesteps legality—jury may see deflection.'
            }
          ]
        },
        {
          stage: 'Cross-Examination',
          prompt: 'You’re questioning the GCAA safety‑officer witness. They claim “Park was a published red zone.” How do you undermine that?',
          hint: 'Focus on notice and enforcement procedures.',
          arguments: [
            {
              text: '“Can you show me the date the map was published versus when the student flew?”',
              quality: 'poor',
              feedback: 'Timing is technical—jury may lose interest.'
            },
            {
              text: '“Were any physical signs or geofencing devices installed in that park?”',
              quality: 'good',
              feedback: 'Direct attack on actual notice.'
            },
            {
              text: '“Is there a record of formal public notice or press release for this red‑zone?”',
              quality: 'medium',
              feedback: 'Similar to signs—less direct than devices question.'
            },
            {
              text: '“Do you agree that line‑of‑sight and sub‑400 ft flights are expressly permitted elsewhere?”',
              quality: 'poor',
              feedback: 'Shifts focus away from the zone violation.'
            }
          ]
        },
        {
          stage: 'Closing & Verdict',
          prompt: 'Select your closing statement and predicted verdict:',
          arguments: [
            {
              text: '“This was a harmless, teacher‑approved flight; no crime occurred.” • Not Guilty—case dismissed',
              quality: 'good',
              feedback: 'Ties together intent, risk and law nicely.'
            },
            {
              text: '“At worst this was innocent negligence—dismiss or defer to civil remedy.” • Conditional discharge + community service',
              quality: 'medium',
              feedback: 'Reasonable but skirts full acquittal.'
            },
            {
              text: '“Liability exists—minor fine only.” • Guilty (minor fine)',
              quality: 'poor',
              feedback: 'Undermines your own defence argument.'
            }
          ]
        }
      ]
    },
  
    // ——————————————————
    // Case #2 “Delivery Scooter Showdown”
    {
      id: 'scooter-showdown',
      title: 'Delivery Scooter Showdown 🛵⚖',
      introductionText: `
  A food‑delivery scooter driver ran a red light on a busy intersection and nearly collided with pedestrians. The Prosecutor argues this endangered the public and violated the new traffic code. The Defender counters that punitive delivery‑platform contracts and unrealistic delivery targets forced the driver to rush.
      `.trim(),
      prosecutorOverview: `
  Prove the driver’s red‑light run violated traffic laws and endangered the public:
  - Frame opening on public‑safety + code breaches.
  - Apply the strongest traffic statute.
  - Introduce camera evidence and platform contracts as motive.
  - Cross‑examine driver on unsafe working conditions.
  - Close by linking harm to statutory penalties.
      `.trim(),
      defenderOverview: `
  Create reasonable doubt about criminal fault:
  - Emphasize platform‑imposed targets and unfair contracts.
  - Challenge traffic statute applicability.
  - Use Employer Contract to show coercion.
  - Cross‑ex traffic officer on rush blame.
  - Close on lack of intent and call for labour‑law remedy.
      `.trim(),
      prosecutorStages: [
        {
          stage: 'Opening Statement',
          prompt: 'Choose your opening theme:',
          hint: 'Lead with the strongest public‑safety framing tied to a statute.',
          arguments: [
            {
              text: '“This red‑light violation under Art. 33 endangered lives—only strict enforcement will deter future runs.”',
              quality: 'good',
              feedback: 'Hits public‑safety + statutory reference hard.'
            },
            {
              text: '“Traffic Cam Footage shows a clear run; no platform excuse overrides public‑safety laws.”',
              quality: 'medium',
              feedback: 'Good evidence focus but less statutory anchor.'
            },
            {
              text: '“Ministerial Res. 130/1997 imposes black‑points that apply here unambiguously.”',
              quality: 'medium',
              feedback: 'Valid but old regulation is secondary.'
            },
            {
              text: '“Employer Contract penalties drove the driver—but safety laws cannot be waived.”',
              quality: 'poor',
              feedback: 'Shifts too much to motive—loses statutory clarity.'
            }
          ]
        },
        {
          stage: 'Statute Selection',
          prompt: 'Which law backs the toughest penalty?',
          hint: 'Focus on the new traffic code’s direct punishment.',
          arguments: [
            {
              text: 'Decree‑Law 14/2024 Art. 33 – red‑light run: black‑points + fine up to AED 5 000.',
              quality: 'good',
              feedback: 'Correct—direct and newest penalty.'
            },
            {
              text: 'Res. 130/1997 – old fine matrix (AED 300–1 000 + 4 points).',
              quality: 'poor',
              feedback: 'Superseded by the new code.'
            },
            {
              text: 'Decree‑Law 33/2021 – labour‑law safe‑conditions clause.',
              quality: 'poor',
              feedback: 'Labour law, not traffic offence.'
            },
            {
              text: 'Cabinet Res. 18/2022 – platform‑penalty enforcement.',
              quality: 'poor',
              feedback: 'Labour remedy, not a traffic penalty.'
            }
          ]
        },
        {
          stage: 'Introducing Evidence',
          prompt: 'Which Play Card do you deploy first?',
          hint: 'Establish the clear violation on camera before motive.',
          arguments: [
            {
              text: 'Traffic Cam Footage – timestamp showing the exact red‑light run.',
              quality: 'good',
              feedback: 'Irrefutable proof of violation.'
            },
            {
              text: 'Employer Contract – penalty clause forcing sub‑15 min delivery.',
              quality: 'poor',
              feedback: 'Motive is secondary—violation is primary.'
            },
            {
              text: 'Driver’s Statement – claim of “only a 2‑sec delay.”',
              quality: 'poor',
              feedback: 'Self‑serving and less impactful than video.'
            },
            {
              text: 'Municipal intersection map – high pedestrian traffic.',
              quality: 'medium',
              feedback: 'Contextual but not direct proof.'
            }
          ]
        },
        {
          stage: 'Cross-Examination',
          prompt: 'Questioning the driver. They say “I’ve run red dozens of times with no harm.” Your attack?',
          hint: 'Pin motive vs. legal obligation.',
          arguments: [
            {
              text: '“Why didn’t you wait the two extra seconds when the footage clearly shows the light?”',
              quality: 'good',
              feedback: 'Directly contrasts safety vs. speed.'
            },
            {
              text: '“Does your platform penalize you AED 50 per late order—how is public‑safety irrelevant?”',
              quality: 'medium',
              feedback: 'Good motive probe but diffuses focus on the law.'
            },
            {
              text: '“Are you aware that even a near‑miss can lead to criminal reckless driving charges?”',
              quality: 'medium',
              feedback: 'Valid but less punchy than timing question.'
            },
            {
              text: '“Can you produce any documented safety training provided by your platform?”',
              quality: 'poor',
              feedback: 'Shifts away from the statute violation.'
            }
          ]
        },
        {
          stage: 'Closing & Verdict',
          prompt: 'Pick your closing line and anticipated outcome:',
          arguments: [
            {
              text: '“No contractual fine outweighs public‑safety statutes—guilty verdict is mandatory.” • Guilty – black‑points + AED 5 000 fine',
              quality: 'good',
              feedback: 'Clear, statutory, matches punishment.'
            },
            {
              text: '“This court must send a message: platform excuses are null.” • Guilty + community service',
              quality: 'medium',
              feedback: 'Strong but lenient on penalty.'
            },
            {
              text: '“Refer dispute to MOHRE for labour action.” • Not Guilty',
              quality: 'poor',
              feedback: 'Misplaces jurisdiction.'
            }
          ]
        }
      ],
      defenderStages: [
        {
          stage: 'Opening Statement',
          prompt: 'Choose your opening theme:',
          hint: 'Emphasize lack of criminal intent and coercion.',
          arguments: [
            {
              text: '“The platform’s Employer Contract forced unsafe targets; traffic law must consider coercive context.”',
              quality: 'good',
              feedback: 'Solid shift to labour‑law context.'
            },
            {
              text: '“Driver paused at yellow, then rushed by platform demand—this is a labour dispute.”',
              quality: 'medium',
              feedback: 'Good nuance but less direct than contract clause.'
            },
            {
              text: '“No footage can justify criminal blame when underlying cause is unfair contract.”',
              quality: 'poor',
              feedback: 'Overly broad—ignores public safety.'
            },
            {
              text: '“Art. 33 fines misdemeanour—intent to hurry ≠ recklessness.”',
              quality: 'medium',
              feedback: 'Technically correct but less persuasive.'
            }
          ]
        },
        {
          stage: 'Statute Challenge',
          prompt: 'Which law do you neutralize?',
          hint: 'Tie challenge to labour‑law primacy over coercive contracts.',
          arguments: [
            {
              text: 'Decree‑Law 14/2024 Art. 33 – argue it doesn’t account for labour conflicts.',
              quality: 'poor',
              feedback: 'Weak—traffic law is absolute.'
            },
            {
              text: 'Res. 130/1997 – point out it’s superseded by the new code.',
              quality: 'poor',
              feedback: 'True but irrelevant to safety targets.'
            },
            {
              text: 'Decree‑Law 33/2021 – safe‑working conditions override unsafe targets.',
              quality: 'good',
              feedback: 'Leverages labour law to shift blame.'
            },
            {
              text: 'Cabinet Res. 18/2022 – platform‑penalties handled by MOHRE, not court.',
              quality: 'medium',
              feedback: 'Valid but indirect on traffic offence.'
            }
          ]
        },
        {
          stage: 'Evidence Rebuttal',
          prompt: 'Which Play Card casts doubt?',
          hint: 'Show economic coercion as root cause.',
          arguments: [
            {
              text: 'Employer Contract – clause showing AED 100 penalty per minute late.',
              quality: 'good',
              feedback: 'Concrete proof of coercion.'
            },
            {
              text: 'Driver’s Statement – logs proving no prior offences.',
              quality: 'medium',
              feedback: 'Shows clean record but not cause.'
            },
            {
              text: 'Traffic Cam Footage (slow‑motion) – light turned red just as scooter entered.',
              quality: 'poor',
              feedback: 'Slanted—jury may resent technicality.'
            },
            {
              text: 'MOHRE Midday‑Break Directive – proof of rider welfare mandate.',
              quality: 'medium',
              feedback: 'Good context but less direct.'
            }
          ]
        },
        {
          stage: 'Cross-Examination',
          prompt: 'Questioning the officer who says “Everyone must obey lights regardless.” Your turn?',
          hint: 'Focus interplay of traffic + labour‑law protections.',
          arguments: [
            {
              text: '“Are you aware labour law forbids penalizing riders in a way that endangers safety?”',
              quality: 'good',
              feedback: 'Perfect—forces them to admit labour primacy.'
            },
            {
              text: '“Did you inspect if red‑light camera calibration errors affected footage?”',
              quality: 'medium',
              feedback: 'Technical and weakens photo evidence.'
            },
            {
              text: '“Can you confirm platform’s delivery‑time clauses violate MOHRE directives?”',
              quality: 'medium',
              feedback: 'Good but needs documentation.'
            },
            {
              text: '“Do you agree the light timing was below standard safety guidelines?”',
              quality: 'poor',
              feedback: 'Too specialist—jury may tune out.'
            }
          ]
        },
        {
          stage: 'Closing & Verdict',
          prompt: 'Pick your closing statement and expected outcome:',
          arguments: [
            {
              text: '“This was a coerced mistake under unfair contracts—criminal court is the wrong forum.” • Not Guilty—refer platform to MOHRE',
              quality: 'good',
              feedback: 'Balances safety with labour fairness.'
            },
            {
              text: '“Driver complied as best possible; platform penalties spawned the rush.” • Conditional Discharge + training',
              quality: 'medium',
              feedback: 'Reasonable but could push full acquittal.'
            },
            {
              text: '“Guilty but minor fine; then labour hearing.” • Guilty (minor fine)',
              quality: 'poor',
              feedback: 'Confuses jurisdiction—hurts your defense.'
            }
          ]
        }
      ]
    },
  
    // ——————————————————
    // Case #3 “Robot Assistant Gone Rogue”
    {
      id: 'robot-rogue',
      title: 'Robot Assistant Gone Rogue 🤖⚠',
      introductionText: `
  A student’s AI‑powered home assistant began sending prank emails to classmates, mocking teachers and sharing private info. The Prosecutor alleges this is cyber misconduct under UAE Cybercrime Law. The Defender argues the AI misunderstood an ambiguous voice command and the student never intended harm.
      `.trim(),
      prosecutorOverview: `
  Show the AI’s actions breach cyber‑crime and privacy laws:
  - Frame prank emails as reputational harm.
  - Choose the strongest cyber‑law statute.
  - Introduce Device Logs to prove unauthorized access.
  - Cross‑examine the student on intent vs. AI autonomy.
  - Close by linking insult‑publication to Art. 50 penalties.
      `.trim(),
      defenderOverview: `
  Create reasonable doubt about intent and control:
  - Emphasize AI autonomy and ambiguous command.
  - Challenge “insult” under Art. 50 when intent is missing.
  - Deploy the User Voice Command to show ambiguity.
  - Cross‑examine the IT‑expert on log reliability.
  - Close for dismissal or narrow PDPL remedy.
      `.trim(),
      prosecutorStages: [
        {
          stage: 'Opening Statement',
          prompt: 'Choose your main opening theme:',
          hint: 'Lead with the statute carrying the harshest penalty (Art 50).',
          arguments: [
            {
              text: '“These prank emails defamed classmates and violated Art. 50—public humiliation is a crime.”',
              quality: 'good',
              feedback: 'Perfect—direct reference to the harshest penalty.'
            },
            {
              text: '“Device Logs show unauthorized access—Art 43 breach.”',
              quality: 'medium',
              feedback: 'Good on access but less on reputational harm.'
            },
            {
              text: '“PDPL requires consent to process personal data; none was given.”',
              quality: 'medium',
              feedback: 'Valid privacy angle but less criminal focus.'
            },
            {
              text: '“Cabinet Res. 28/2023 mandates breach notification—none was issued.”',
              quality: 'poor',
              feedback: 'Administrative, not criminal, angle.'
            }
          ]
        },
        {
          stage: 'Statute Selection',
          prompt: 'Which law gives you the strongest charge?',
          hint: 'Art 50 targets reputational harm directly.',
          arguments: [
            {
              text: 'Art 50, Decree‑Law 34/2021 – insulting electronic content (AED 250 000 + jail).',
              quality: 'good',
              feedback: 'Exactly the reputational‑harm statute.'
            },
            {
              text: 'Arts 43–45, Decree‑Law 34/2021 – unlawful access/alteration.',
              quality: 'medium',
              feedback: 'Good but less severe than insulting content.'
            },
            {
              text: 'PDPL Decree‑Law 45/2021 – data processing without consent.',
              quality: 'poor',
              feedback: 'Privacy, not insult‑based criminality.'
            },
            {
              text: 'Cabinet Res. 28/2023 – failure to retain logs/breach notice.',
              quality: 'poor',
              feedback: 'Administrative duty, not insulting content.'
            }
          ]
        },
        {
          stage: 'Introducing Evidence',
          prompt: 'Which Play Card do you deploy first?',
          hint: 'Prove the assistant’s unauthorized access before debating motive.',
          arguments: [
            {
              text: 'Device Logs – timestamps showing the assistant accessed classmates’ mailboxes.',
              quality: 'good',
              feedback: 'Direct proof of unauthorized access.'
            },
            {
              text: 'User Voice Command – audio clip “Send a funny email to my friends.”',
              quality: 'medium',
              feedback: 'Shows instruction but not access breach.'
            },
            {
              text: 'School Policy – ban on unauthorized messaging.',
              quality: 'poor',
              feedback: 'Policy is weaker than a federal statute.'
            },
            {
              text: 'AI Testimony – “I thought it was a joke.”',
              quality: 'poor',
              feedback: 'Self‑serving and less reliable than logs.'
            }
          ]
        },
        {
          stage: 'Cross-Examination',
          prompt: 'Questioning the student. They say, “I never told it to insult anyone.” Your attack?',
          hint: 'Shift focus from intent to unauthorized actions.',
          arguments: [
            {
              text: '“Why didn’t you review the draft emails in your ‘Sent’ folder before they went out?”',
              quality: 'good',
              feedback: 'Highlights negligence in oversight.'
            },
            {
              text: '“Your command ‘funny email’ is vague—but insult laws require no explicit malice.”',
              quality: 'medium',
              feedback: 'Clever, but intent could still be ambiguous.'
            },
            {
              text: '“Could you explain why breach‑notification duties weren’t followed?”',
              quality: 'poor',
              feedback: 'Distracts into administrative duties.'
            },
            {
              text: '“Does PDPL require you to delete those logs once you saw sensitive data?”',
              quality: 'poor',
              feedback: 'Sidesteps insult‑based argument.'
            }
          ]
        },
        {
          stage: 'Closing & Verdict',
          prompt: 'Pick your closing line and anticipated verdict:',
          arguments: [
            {
              text: '“Insulting classmates is punishable—guilty under Art. 50 is clear.” • Guilty – AED 250 000 fine + jail',
              quality: 'good',
              feedback: 'Directly matches statute and penalty.'
            },
            {
              text: '“Unauthorized access is criminal; penalties must deter AI misuse.” • Guilty with suspended sentence',
              quality: 'medium',
              feedback: 'Good but less focus on reputational harm.'
            },
            {
              text: '“Refer breach to PDPL authority only.” • Not Guilty',
              quality: 'poor',
              feedback: 'Avoids criminal dimension.'
            }
          ]
        }
      ],
      defenderStages: [
        {
          stage: 'Opening Statement',
          prompt: 'Choose your main opening theme:',
          hint: 'Emphasize absence of criminal intent and AI autonomy.',
          arguments: [
            {
              text: '“This was a tragic misinterpretation by the AI—no intent to insult under Art. 50.”',
              quality: 'good',
              feedback: 'Perfect—zeroes in on intent.'
            },
            {
              text: '“PDPL requires willful processing; the assistant acted autonomously.”',
              quality: 'medium',
              feedback: 'Fair, but less emotive.'
            },
            {
              text: '“Cabinet Res. 28/2023 covers operators, not end‑users—no breach‑notification duty here.”',
              quality: 'poor',
              feedback: 'Administrative, not criminal, angle.'
            },
            {
              text: '“School Policy warns against pranks, but policy is not law—dismiss charges.”',
              quality: 'poor',
              feedback: 'Weak legal conflation.'
            }
          ]
        },
        {
          stage: 'Statute Challenge',
          prompt: 'Which law will you neutralize?',
          hint: 'Tie challenge to lack of intent under criminal law.',
          arguments: [
            {
              text: 'Art. 50 – “insult” requires targeted malice, not AI error.',
              quality: 'good',
              feedback: 'Focuses on the mens rea requirement.'
            },
            {
              text: 'Arts 43–45 – AI accessed only content student owned.',
              quality: 'medium',
              feedback: 'Some merit but weaker than intent argument.'
            },
            {
              text: 'PDPL – processing was incidental to functionality.',
              quality: 'poor',
              feedback: 'Less direct to criminal breach.'
            },
            {
              text: 'Cabinet Res. 28/2023 – applies to device makers, not users.',
              quality: 'poor',
              feedback: 'Sidesteps insult statute.'
            }
          ]
        },
        {
          stage: 'Evidence Rebuttal',
          prompt: 'Which Play Card casts doubt?',
          hint: 'Show genuine ambiguity in instruction.',
          arguments: [
            {
              text: 'User Voice Command – clip “Send email to my friends” with no mention of pranks.',
              quality: 'good',
              feedback: 'Demonstrates lack of explicit instruction.'
            },
            {
              text: 'Device Logs – entries showing AI errors flagged in debug log.',
              quality: 'medium',
              feedback: 'Shows system-level error but not instruction ambiguity.'
            },
            {
              text: 'School Policy – only student bears liability for misconduct.',
              quality: 'poor',
              feedback: 'Policy vs. law—weak in court.'
            },
            {
              text: 'AI Testimony – “I misheard ‘friends’ as ‘fun’” quote.',
              quality: 'poor',
              feedback: 'Too whimsical for serious court.'
            }
          ]
        },
        {
          stage: 'Cross-Examination',
          prompt: 'Questioning the IT‑expert who claims “Logs prove intentional override.” Your turn?',
          hint: 'Undermine log reliability.',
          arguments: [
            {
              text: '“Can you confirm debug logs record false‑positive errors at a 5% rate?”',
              quality: 'good',
              feedback: 'Raises doubt on log accuracy.'
            },
            {
              text: '“Did you verify the integrity of the timestamp on those logs?”',
              quality: 'medium',
              feedback: 'Technical but valid.'
            },
            {
              text: '“Are you aware PDPL allows processing for security testing purposes?”',
              quality: 'medium',
              feedback: 'Good regulatory nuance but less on intent.'
            },
            {
              text: '“Can you show any record of the student manually editing emails?”',
              quality: 'poor',
              feedback: 'Shifts away from core dispute.'
            }
          ]
        },
        {
          stage: 'Closing & Verdict',
          prompt: 'Pick your closing statement and expected outcome:',
          arguments: [
            {
              text: '“This was an AI‑driven mistake—no criminal intent means no guilty verdict.” • Not Guilty—criminal charges dismissed',
              quality: 'good',
              feedback: 'Clear, matches lack of mens rea.'
            },
            {
              text: '“Referral to PDPL authority and corrective training is proper.” • Conditional Discharge + AI‑ethics workshop',
              quality: 'medium',
              feedback: 'Reasonable but skirts full acquittal.'
            },
            {
              text: '“Guilty under minor admin penalty.” • Guilty (administrative)',
              quality: 'poor',
              feedback: 'Contradicts your opening argument.'
            }
          ]
        }
      ]
    }
  ];
  