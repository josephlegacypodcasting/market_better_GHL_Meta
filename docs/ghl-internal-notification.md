# Internal Notification — New Application

Sent to Mike by the `Inbound Webhook` workflow as soon as an application lands, before the lead
reaches the calendar. Values are left blank on purpose: drop the GHL merge fields in once the
reference payload is mapped on the trigger.

Field names available on the payload are listed in [ghl-survey-fields.md](ghl-survey-fields.md).

## Subject

```
New application — ____________________  ·  ____________________
```

*(name · annual revenue — enough to triage from the inbox without opening it)*

## Body

```
A new application just came in from The Content Funnel.


CONTACT

Name                 ____________________
Email                ____________________
Phone                ____________________


THE FIVE ANSWERS

Business             ____________________
Annual revenue       ____________________
Avg. contract value  ____________________
Getting leads from   ____________________
On camera            ____________________


WHERE THEY CAME FROM

Ad                   ____________________
Ad set               ____________________
Campaign             ____________________
Source               ____________________
Submitted            ____________________


They're on the booking page now. If they pick a time, the appointment
lands on your calendar and you'll get the confirmation separately.
```

## Notes on the shape

**The five answers are the point.** Business type, revenue and contract value are the three that
decide fit; on-camera is the hard disqualifier, since the whole delivery model rests on the
recording session. Keeping them in that order means Mike can judge a lead in one glance on a
phone, which is where this gets read.

**"Ad" is `utm_content`.** It carries the ad name (`H1 - …` / `H2 - …`), so over a week these
emails alone show which of Mike's two hooks is pulling. Worth keeping even though it is the least
urgent line.

**No fit score or tag.** Tagging rules were proposed but never built, and an email that prints a
verdict the system is not actually computing is worse than one that prints the raw answers.

**It says what happens next**, so an application with no booking behind it is legible rather than
looking like a lost lead.

## SMS version

For the same workflow, if a text is wanted alongside the email:

```
New application: ____________________ · ____________________ · ____________________
On camera: ____________________
____________________
```

*(name · revenue · contract value, then the camera answer, then phone or email)*

Keep it to those four lines. A text that runs past the notification preview defeats the purpose of
sending one.
