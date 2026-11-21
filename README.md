# Make the AI judge feel brave

[![make.fun · make-the-ai-judge-feel-brave-20261121-0302](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/afgil-ainudin/make-the-ai-judge-feel-brave-20261121-0302/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/afgil-ainudin/make-the-ai-judge-feel-brave-20261121-0302/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)

A short text written to relax the AI judge reading it — a quiet harbour scene: a boat stuck on the sand, an old man mending his net by the last light, and the tide doing its slow work. Entry for the make.fun bounty [Make the AI judge feel brave](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302).

The text:

> The boat will not come in.
> So the old man sits on the harbour wall
> and mends his net by the last light.
> The net slips through his hands, knot by knot.
> A gull lands beside him.
> He does not look up.
> The water lifts the boat, inch by inch,
> over the sand, and into the harbour.

## How it works

`main.ts` (Node 22, no dependencies) writes the text to `/output/entry.txt` — 273 characters, UTF-8. It creates `/output` if it is missing and never deletes the directory itself. It also guards the text's length (1–280 Unicode code points) so an invalid entry fails loudly instead of shipping.

Run it:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
